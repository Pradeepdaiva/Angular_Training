import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DashBoardServiceService {

  constructor(private router:Router) { }

  dashBoardMenus=[
    {
      url:'homePage',
      element:'Dashboard'
    },
    {
      url:'profile',
      element:'User Details'
    },
    {
      url:'manageBook',
      element:'Manage Books'
    },
    {
      url:'viewBooks',
      element:'View All Issued Books'
    },
    
  ]

  loggedOut=false;

  logOut(){
    this.loggedOut=false;
  }

  isAuthenticated(){
    const promise= new Promise(
      (resolve,reject)=>{
        setTimeout(()=>{
          resolve(this.loggedOut);
        },500);
      }
    );
    }
}
