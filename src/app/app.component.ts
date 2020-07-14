import { Component } from '@angular/core';
import { ApComponent} from './ap.component';
import { ApService} from './ap.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Album';
    constructor (private authService:ApService, 
               private router:Router) {
  }
  
 
}
