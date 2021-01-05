import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserLoginServiceService {

  constructor(private http:HttpClient,private router:Router) { }


  loggedIn=false;

  logIn(userId){
    this.loggedIn=true;
    this.router.navigate(['/welcome'],{
      queryParams:{ id: userId,status:true}
    });
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
