
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { Album } from './album.component';
import { AppPhotos } from './photos.component';
import { AppUsers } from  './users.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { ApService } from './ap.service';

const appRoutes: Routes = [
   { path: 'albums', component: Album, canActivate : [AuthGuardService] },
   { path: 'photos/:id', component: AppPhotos, canActivate : [AuthGuardService] },
   { path: '', component: AppUsers }
];
@NgModule({
  declarations: [
    AppComponent,Album,AppPhotos,AppUsers
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
     RouterModule.forRoot(appRoutes),
     HttpModule
  ],
   providers: [AuthGuardService,ApService],
  bootstrap: [AppComponent]
})
export class AppModule { }
