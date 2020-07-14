import { Component } from '@angular/core';
import { IAlbum } from './album';
import { AlbumService } from './album.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Component ({
   selector: 'my-app',
   templateUrl: './albums.html',
   providers: [AlbumService]
})

export   class   Album  {
   ialbums: IAlbum[];
    tabFlag :boolean = true; 
  
  vertFlag : boolean= false;
   constructor(private _album: AlbumService) {
   }
   
   ngOnInit() : void {
      this._album.getalbums()
      .subscribe(ialbums => this.ialbums = ialbums);
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
