import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLoginServiceService } from '../user-login/user-login-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardForWelcomeService implements CanActivateChild {

  constructor(private route:Router,private userLoginService:UserLoginServiceService) { }

canActivateChild(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      return this.userLoginService.isAuthenticated()
      .then((authenticated : boolean) => {
        if(authenticated){
          return true;
        } else{
          this.route.navigate(['/userLogin']);
        }
      })
    

  }

}
