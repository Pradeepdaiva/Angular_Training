import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginServiceService {

  constructor(private http:HttpClient,private router:Router) { }

  loggedIn=false;

  logIn(){
    this.loggedIn=true;
    this.router.navigate(['/dashBoard/homePage']);
  }

  logOut(){
    this.loggedIn=false;
  }

  isAuthenticated(){
    const promise= new Promise(
      (resolve,reject)=>{
        setTimeout(()=>{
          resolve(this.loggedIn);
        },500);
      }
    );
    return promise;
  }
  
  getUserRegistry(){
    return this.http.get('http://localhost:8080/userRegistry');
  }

 
}
