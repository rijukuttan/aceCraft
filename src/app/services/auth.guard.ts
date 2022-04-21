import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isAuthenticated:boolean=false;
  constructor(
    private authService: UserService,
    private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //  this.authService.authSubject.subscribe(
      //   data => 
      //   {
      //     console.log('inside: ' + data );
      // // return data;
      //     this.isAuthenticated = data;
      //   }
      // );
      var isAuthenticateds= this.authService.getAuthStatus();
 
      if (isAuthenticateds) {
        console.log('inside false ' + isAuthenticateds);
          this.router.navigate(['/login']);
          return false;
      }else {
        console.log('next subscribed value:t3etg ' + isAuthenticateds);
        //this.router.navigate(['/Home']);
        return true;
      }
     
      
  }
  
}
