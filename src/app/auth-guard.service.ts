import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
import { ApService } from './ap.service';
 
 
@Injectable()
export class AuthGuardService implements CanActivate {
 
    constructor(private router:Router, private authService: ApService ) {
 
    }
 
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean|UrlTree {
 
       if (!this.authService.isUserLoggedIn()) {
            alert('You are not allowed to view this page.');
            
            this.router.navigate(["albums"],{ queryParams: { retUrl: route.url} });
            return false;
 
            //var urlTree = this.router.createUrlTree(['login']);
            //return urlTree;
        } 
 
        return true;
    }
 
}
 
