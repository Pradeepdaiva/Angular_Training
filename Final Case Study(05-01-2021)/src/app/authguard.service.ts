import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot,} from '@angular/router';
import { Observable } from 'rxjs';
import { AdminLoginServiceService } from './admin-login/admin-login-service.service';
import { DashBoardServiceService } from './dash-board/dash-board-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{

  constructor(private adminService:AdminLoginServiceService,private service:DashBoardServiceService,
               private route:Router) { }

  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
     return this.adminService.isAuthenticated()
                       .then((authenticated : boolean) => {
                         if(authenticated){
                           return true;
                         } else{
                           this.route.navigate(['/adminLogin']);
                         }
                       })
  }

}
