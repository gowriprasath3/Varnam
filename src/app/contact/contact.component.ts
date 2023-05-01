import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // public formData = new FormGroup({
  //   fullname: new FormControl(''),
  //   email: new FormControl(''),
  //   comment: new FormControl(''),
  // });

  constructor(private builder:FormBuilder, private contact:ContactService) { }

  ngOnInit(): void {

    // this.formData = this.builder.group({
    //   fullname: new FormControl('', [Validators.required]),
    //   email: new FormControl('', [Validators.required]),
    //   comment: new FormControl('', [Validators.required])

  

}

// onSubmit(formData:any) {
//   console.log(FormData)
//   this.contact.postMessage(formData)
//   .subscribe((response:any) => {
//   location.href = 'https://mailthis.to/confirm'
//   console.log(response)
//   },(error:any)  => {
//   console.warn(error.responseText)
//   console.log({ error })
//   })
//   }


}
