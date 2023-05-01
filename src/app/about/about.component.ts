import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from '../image-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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
    }

      );
    }
  
  }
