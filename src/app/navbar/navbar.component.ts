import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from '../image-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  imageList:any;
  listLength:any;

  constructor(private imageservice: ImageServiceService) {
 
    this.imageList= this.imageservice.getHomeImageList();


   }

  ngOnInit(): void {

    this.imageservice.homeImageList.snapshotChanges().subscribe((list:any) => {
      this.imageList = list.map((item:any) => { return item.payload.val(); });

      console.log("imageList: "+this.imageList[0].imageUrl);
      this.listLength= this.imageList.length

      console.log("length====> "+ this.listLength);

     // this.rowIndexArray =  Array.from(Array(Math.ceil((this.imageList.) / 3)).keys());
    }
  );
}

  }


