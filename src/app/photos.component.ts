import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PPhoto } from './photos';
import { PhotoService } from './photos.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
@Component ({
   selector: 'my-inv',
   templateUrl: './photos.component.html',
   providers: [PhotoService]
})
export class AppPhotos implements OnInit, OnDestroy {
  
  id: number;
  private sub: any;
  photos: PPhoto[];
  tabFlag :boolean = true; 
  
  vertFlag : boolean= false;
  constructor(private route: ActivatedRoute, private _photo: PhotoService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
 this._photo.getphotos()
      .subscribe(photos => this.photos = photos);
       // In a real app: dispatch action to load the details here.
    });
  }
   
   
   
   //ngOnInit() : void {
     // this._product.getproducts()
    //  .subscribe(iproducts => this.iproducts = iproducts);
   //}
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  public currentImage;

public setImage = (id) => {
  if (this.currentImage === id) return;
  this.currentImage = id;
}
showTab=function(){
  this.tabFlag = true;
  this.vertFlag = false;
}
showVertical= function() {
  this.tabFlag = false;
  this.vertFlag = true;
}
}
