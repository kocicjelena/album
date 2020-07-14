import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import { map } from 'rxjs/operators';
//import 'rxjs/operators';
//import 'rxjs/add/operator;
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { IAlbum } from './album';

@Injectable()
export class AlbumService {
   private _albumurl='https://my-json-server.typicode.com/kocicjelena/pict/albums';
    private _userurl='https://my-json-server.typicode.com/kocicjelena/pict/users';
   constructor(private _http: Http){}
   httpdata;
   getalbums(): Observable<IAlbum[]> {
      return this._http.get(this._albumurl)
      .map((response: Response) => <IAlbum[]> response.json())
      .do((data) => {this.displaydata(JSON.stringify(data));});
       
      //.do((data) => {JSON.stringify(data)});
     // .do((data) => {this.displaydata(data);});
   }
 
      //.do((data) => {JSON.stringify(data)});
     // .do((data) => {this.displaydata(data);});
   
  // getPrint(): {return JSON.stringify(data);}
    displaydata(data) {this.httpdata = data;}
}
