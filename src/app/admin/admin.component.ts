import { Component, OnInit } from '@angular/core';
import { AngularFireObject, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { ImageServiceService } from '../image-service.service';
import { Team } from '../team';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  imageList: any;
  rowIndexArray: any;
  listLength:any;

  constructor(private service: ImageServiceService) {
  this.imageList= this.service.getImageDetailList();
   }

  ngOnInit() {
    this.service.imageDetailList.snapshotChanges().subscribe((list:any) => {
        this.imageList = list.map((item:any) => { return item.payload.val(); });
  
        console.log("imageList: "+this.imageList[0].imageUrl);
        this.listLength= this.imageList.length

        console.log("length====> "+ this.listLength);

       // this.rowIndexArray =  Array.from(Array(Math.ceil((this.imageList.) / 3)).keys());
      }
    );
  }

}
