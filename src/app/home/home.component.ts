import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from '../image-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private imageservice: ImageServiceService) {

    this.imageList= this.imageservice.getHomeImageList();
   }


  imageList:any;
  listLength:any;

  ngOnInit(): void {

   

    this.imageservice.homeImageList.snapshotChanges().subscribe((list:any) => {
      this.imageList = list.map((item:any) => { return item.payload.val(); });

      console.log("imageList: "+this.imageList[0].imageSrc);
      this.listLength= this.imageList.length

      console.log("length====> "+ this.listLength);

     // this.rowIndexArray =  Array.from(Array(Math.ceil((this.imageList.) / 3)).keys());
    }
  );
  }

}
