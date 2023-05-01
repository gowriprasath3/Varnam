import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from "rxjs/operators";
import { ImageServiceService } from 'src/app/image-service.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-admin-team',
  templateUrl: './admin-team.component.html',
  styleUrls: ['./admin-team.component.css']
})
export class AdminTeamComponent implements OnInit {
  imgSrc: any;
  selectedImage: any = null;
  isSubmitted: any;
  team:any;
  private basepath="/uploads";

  formTemplate = new FormGroup({
    name: new FormControl('', Validators.required),
    posting: new FormControl(''),
    imageUrl: new FormControl('', Validators.required)
  })

  constructor(private storage: AngularFireStorage, private service: ImageServiceService) { }

  ngOnInit() {
    this.resetForm();
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else {
      this.imgSrc = '../../assets/images/nit.jpg';
      this.selectedImage = null;
    }
  }


  // pushFileToStorage(fileUpload: any): Observable<any> {

  //   console.log("1=="+fileUpload.caption);
  //   console.log("1=="+fileUpload.imageUrl);
  //   console.log("1=="+fileUpload.category);
  //   const filePath = `${this.basepath}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
  //   const storageRef = this.storage.ref(filePath);
  //   const uploadTask = this.storage.upload(filePath, fileUpload.file);
  //   uploadTask.snapshotChanges().pipe(
  //     finalize(() => {
  //       storageRef.getDownloadURL().subscribe(downloadURL => {
  //         fileUpload.url = downloadURL;
  //         fileUpload.name = fileUpload.file.name;
  //          this.service.insertImageDetails(fileUpload);
  //       });
  //     })
  //   ).subscribe();
  //   return uploadTask.percentageChanges();
  // }


  onSubmit(formValue:any) {
    console.log("inside submit method"+formValue.name)
    console.log("inside submit method"+formValue.imageUrl)
    console.log("inside submit method"+formValue.posting)
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${this.basepath}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.service.insertImageDetails(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  get formControls() {
    return this.formTemplate['controls'];
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      name: '',
      imageUrl: '',
      posting: ''
    });
    this.imgSrc = '../../assets/images/nit.jpg';
    this.selectedImage = null;
    this.isSubmitted = false;
  }

}
