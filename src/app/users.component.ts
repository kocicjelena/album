import { Component } from '@angular/core';
//import { NewCmpComponent } from './new-cmp.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ApService } from './ap.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component ({
   selector: 'my-app',
   templateUrl: './app.users.html'
})

export class AppUsers  {
newcomponent = ""; 
 invalidCredentialMsg: string;
    username:string;
    password:string;
    retUrl:string="albums";
 
    constructor(private authService: ApService, 
                private router: Router, 
                private activatedRoute:ActivatedRoute) {
    }
 
    ngOnInit() {
        this.activatedRoute.queryParamMap
                .subscribe(params => {
            this.retUrl = params.get('retUrl'); 
            console.log( 'LoginComponent/ngOnInit '+ this.retUrl);
        });
    }
 
    onFormSubmit(loginForm) {
       this.authService.login(loginForm.value.username, loginForm.value.password).subscribe(data => {
           console.log( 'return to '+ this.retUrl);
           if (this.retUrl!=null) {
                this.router.navigate( [this.retUrl]);
           } else {
                this.router.navigate( ['albums']);
           }
       });
    }
}
