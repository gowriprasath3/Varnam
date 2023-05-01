import { animate, style, transition, trigger, AnimationEvent } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ImageServiceService } from '../image-service.service';

interface Item{

  imageSrc: string;
  imageAlt: string;

}

@Component({
  selector: 'app-gallery-lightbox',
  templateUrl: './gallery-lightbox.component.html',
  styleUrls: ['./gallery-lightbox.component.scss'],
  animations:[
    trigger('animation',[
   transition('void => visible',[
   style({transform:'scale(0.5)'}),animate('150ms',style({transform:'scale(1)'}))
   ]),
   transition('visible => void',[
    style({transform:'scale(0.1)'}),animate('150ms',style({transform:'scale(0.5)'}))
    ])
    ]),
    trigger('animation2',[
        transition(':leave',[
          style({opacity:1}),
          animate('50ms',style({opacity:0.8}))
        ])
    ])
  ]
})
export class GalleryLightboxComponent implements OnInit {




  previewImage= false;
  showMask= false;
  showCount=false
 

  galleryData:Item[]=[
    {
      imageSrc: '../../assets/images/DSC_1326.JPG',
      imageAlt: '1'
    },
     {

    imageSrc: "../../assets/images/69711155_738205799974299_6134409144670150839_n.jpg",
    imageAlt: '2'
  },
 
  {
    imageSrc: '../../assets/images/DSC_0012.jpg',
    imageAlt: '3'
  },
  {
    imageSrc: '../../assets/images/DSC_0014.jpg',
    imageAlt: '4'
  },
  {
    imageSrc: '../../assets/images/DSC_0095.jpg',
    imageAlt: '5'
  },
  {
    imageSrc: '../../assets/images/DSC_0112.jpg',
    imageAlt: '6'
  },
  {
    imageSrc: '../../assets/images/DSC_0116.jpg',
    imageAlt: '7'
  },
  {
    imageSrc: '../../assets/images/DSC_0124.jpg',
    imageAlt: '8'
  },
  {
    imageSrc: '../../assets/images/DSC_0128.jpg',
    imageAlt: '9'
  },
  {
    imageSrc: '../../assets/images/DSC_0168.jpg',
    imageAlt: '10'
  },
  {
    imageSrc: '../../assets/images/DSC00471.jpg',
    imageAlt: '11'
  },
  {
    imageSrc: '../../assets/images/IMG_0074.jpg',
    imageAlt: '12'
  },
  {
    imageSrc: '../../assets/images/IMG_5752.jpg',
    imageAlt: '13'
  },
  {
    imageSrc: '../../assets/images/KCT_2212.jpg',
    imageAlt: '14'
  },
  {
    imageSrc: '../../assets/images/IMG_6645.jpg',
    imageAlt: '15'
  },
  {
    imageSrc: '../../assets/images/IMG_9159-2.jpg',
    imageAlt: '16'
  },
  {
    imageSrc: '../../assets/images/IMG_9644.jpg',
    imageAlt: '17'
  },
  {
    imageSrc: '../../assets/images/IMG_9657.jpg',
    imageAlt: '18'
  },
  {
    imageSrc: '../../assets/images/KCT_5876.jpg',
    imageAlt: '19'
  },
  {
    imageSrc: '../../assets/images/IMG_9917.jpg',
    imageAlt: '20'
  },
  {
    imageSrc: '../../assets/images/KCT_2224.jpg',
    imageAlt: '21'
  },
  {
    imageSrc: '../../assets/images/nit.jpg',
    imageAlt: '22'
  },
  {
    imageSrc: '../../assets/images/Infinity.jpg',
    imageAlt: '23'
  },
  {
    imageSrc: '../../assets/images/IMG_5839 (1).jpg',
    imageAlt: '24'
  },
  {
    imageSrc: ']../../assets/images/IMG_20200522_220215.jpg',
    imageAlt: '25'
  },
  {
    imageSrc: '../../assets/images/aura 17.jpg',
    imageAlt: '26'
  },
  {
    imageSrc: '../../assets/images/aura 18.jpg',
    imageAlt: '27'
  },
  {
    imageSrc: '../../assets/images/IMG_20200523_191712.jpg',
    imageAlt: '28'
  },
  {
    imageSrc: '../../assets/images/IMG_20200601_141442.jpg',
    imageAlt: '29'
  },
  {
    imageSrc: '../../assets/images/IMG_20200601_141633.jpg',
    imageAlt: '30'
  },
  {
    imageSrc: '../../assets/images/IMG_20200609_145057.jpg',
    imageAlt: '31'
  },
  {
    imageSrc: '../../assets/images/IMG_20201110_205721.jpg',
    imageAlt: '32'
  },
  {
    imageSrc: '../../assets/images/IMG_20201110_210215.jpg',
    imageAlt: '33'
  },
  {
    imageSrc: '../../assets/images/IMG_20210313_165231.jpg',
    imageAlt: '34'
  },
  {
    imageSrc: '../../assets/images/80305776_182220049500987_3123421984653409626_n.jpg',
    imageAlt: '35'
  },
  {
    imageSrc: '../../assets/images/IMG-20200426-WA0011.jpg',
    imageAlt: '36'
  },
  {
    imageSrc: '../../assets/images/119965518_1550094955199934_4784604423950250265_n.jpg',
    imageAlt: '37'
  },
  {
    imageSrc: '../../assets/images/20478976_117283808917701_1063468803393847296_n.jpg',
    imageAlt: '38'
  },
  {
    imageSrc: '../../assets/images/20582756_118356798731941_6220582000164601856_n.jpg',
    imageAlt: '39'
  },
  {
    imageSrc: '../../assets/images/a4.JPG',
    imageAlt: '40'
  },
  {
    imageSrc: '../../assets/images/27577007_1583050548452846_6077208797753901056_n.jpg',
    imageAlt: '41'
  },
  {
    imageSrc: '../../assets/images/37898540_251522388800348_8049629329660837888_n.jpg',
    imageAlt: '42'
  },
  {
    imageSrc: '../../assets/images/38436457_260821827857037_3479401621224423424_n.jpg',
    imageAlt: '43'
  },
  {
    imageSrc: '../../assets/images/26872032_176849069756085_5559503507297402880_n.jpg',
    imageAlt: '44'
  },
  {
    imageSrc: '../../assets/images/38618414_254288702074899_6246262262462414848_n.jpg',
    imageAlt: '45'
  },
  {
    imageSrc: '../../assets/images/40744054_775148119483206_4768878875113422848_n.jpg',
    imageAlt: '46'
  },
  {
    imageSrc: '../../assets/images/54266474_123798795434766_5219243798813086930_n.jpg',
    imageAlt: '47'
  },
  {
    imageSrc: '../../assets/images/54510949_342285486637751_5432439969667287353_n.jpg',
    imageAlt: '48'
  },
  {
    imageSrc: '../../assets/images/69096216_1217975315074561_4027830456290478143_n.jpg',
    imageAlt: '49'
  },
  {
    imageSrc: '../../assets/images/69218308_686995968378242_7529758822090817464_n.jpg',
    imageAlt: '50'
  },
  {
    imageSrc: '../../assets/images/a2.JPG',
    imageAlt: '51'
  },
  {
    imageSrc: '../../assets/images/69284869_2294254777356206_3130573654761888744_n.jpg',
    imageAlt: '52'
  },
  {
    imageSrc: '../../assets/images/82262375_2605112713044090_2957691372286140950_n.jpg',
    imageAlt: '53'
  },
 
 ];


 imageList:any;
 listLength:any;
  currentLightboxImage: Item= this.galleryData[0];  
  currentIndex=0;
  controls=true;
  totalImageCount=0;

 

  constructor(private imageservice:ImageServiceService) {
     this.imageList= this.imageservice.getGalleryImages();
   }

  ngOnInit(): void {
    // this.imageservice.getImageDetailList();
    this.totalImageCount=this.galleryData.length;


    this.imageservice.galleryList.snapshotChanges().subscribe((list:any) => {
      this.imageList = list.map((item:any) => { return item.payload.val(); });

      console.log("imageList: "+this.imageList[0].imageSrc);
      this.listLength= this.imageList.length

      console.log("length====> "+ this.listLength);

     // this.rowIndexArray =  Array.from(Array(Math.ceil((this.imageList.) / 3)).keys());
    }
  );
  }


  onPreviewImage(index:number){
    this.showMask=true
    this.previewImage=true 
    this.currentIndex=index;
    this.currentLightboxImage=this.imageList[index];

  }


  onAnimationEnd(event:AnimationEvent){
    if(event.toState==='void'){
      this.showMask=false;
    }

  }



  onClosePreview(){
    this.previewImage=false;
  }


  prev(){
  this.currentIndex=this.currentIndex-1;
  if(this.currentIndex<0){
  this.currentIndex=this.imageList.length-1;
}

this.currentLightboxImage=this.imageList[this.currentIndex];

  }

  next(){
    this.currentIndex=this.currentIndex+1;
    if(this.currentIndex>this.imageList.length){
      this.currentIndex=0;
    }

    this.currentLightboxImage=this.imageList[this.currentIndex];
  }

}
