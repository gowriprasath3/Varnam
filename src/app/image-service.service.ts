import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Team } from './team';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

 imageDetailList!: AngularFireList<any>;

 galleryList!: AngularFireList<any>;

 homeImageList!: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getImageDetailList() {
    this.imageDetailList = this.firebase.list('imageDetails');
  }


  getHomeImageList(){
    this.homeImageList = this.firebase.list("home");
  }


  getGalleryImages(){
    this.galleryList = this.firebase.list('gallery');
  }

  insertImageDetails(imageDetails:any) {

    console.log("inside insert method "+imageDetails.imageUrl)

    if(imageDetails){
      console.log(imageDetails);
      
      this.imageDetailList.push(imageDetails);
    }
   
  }
}
