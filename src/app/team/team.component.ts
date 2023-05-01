import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from '../image-service.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  imageList: any;
  rowIndexArray: any;
  listLength:any;

  constructor(private service:ImageServiceService) { 
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
