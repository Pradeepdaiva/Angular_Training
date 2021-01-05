import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginServiceService } from './user-login-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginStatus=false;
  loginDanger=false;
  constructor(private userLoginService:UserLoginServiceService,
    private router:Router) { }

  userData;
  validEmail=false;
  validPassword=false;
  ngOnInit(): void {
    this.getUserDetails()
  }

  hide=true;

  onSubmit(loginForm){
    let flag=0;
    for(let user of this.userData){
      if(user.email.match(loginForm.value.email)){
        if(user.password.match(loginForm.value.password)){
          flag=1;
          // alert("Welcome to page");
          this.loginStatus=true;
          this.moveToWelcome(user.userId);
        }
      }
    }
    if(flag==0){
      // alert("Invalid user");
      this.loginDanger=true;
      this.dangerAlert();
    }
   
  }

  dangerAlert(){
    setTimeout(()=>{
      this.loginDanger=false;
    },1500);
  }

  moveToWelcome(userId){
    setTimeout(()=>{
      this.loginStatus=false;
      this.userLoginService.logIn(userId);
    },1800);
    
  }
  getUserDetails(){
    this.userLoginService.getUserRegistry().subscribe((data)=>
    {
    console.log(data);
    this.userData=data;
        for(let user of this.userData){
         console.log(user);  
        } });
  }

}
