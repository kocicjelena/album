import { Injectable, Input } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import { map } from 'rxjs/operators';
//import 'rxjs/operators';
//import 'rxjs/add/operator;
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { PPhoto } from './photos';

@Injectable()
export class PhotoService {
 
    private _photourl='https://my-json-server.typicode.com/kocicjelena/pict/photos/';
   constructor(private _http: Http){};
   httpdata;
   getphotos(): Observable<PPhoto[]> {
      return this._http.get(this._photourl)
      .map((response: Response) => <PPhoto[]> response.json())
      .do((data) => {this.displaydata(JSON.stringify(data));});
      
   }
   Find(){
      console.log(JSON.stringify(this.httpdata));window.location.href = '/photos';return JSON.stringify(this.httpdata);} 
   
      
        
   displaydata(data) {this.httpdata = data;}
}
