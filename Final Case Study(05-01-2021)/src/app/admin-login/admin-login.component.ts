import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminLoginServiceService } from './admin-login-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private adminLoginService:AdminLoginServiceService,
    private router:Router,private route:ActivatedRoute) { }


  userData;
  validEmail=false;
  validPassword=false;
  validSuccess=false;
  validDanger=false;
  ngOnInit(): void {
    this.getUserDetails()
  }

  hide=true;
  fieldText=true;

  toggle(){
this.fieldText=!this.fieldText;
  }
  onSubmit(loginForm){
    let flag=0;
    // for(let user of this.userData){
    //   if(user.email.match(loginForm.value.email)){
    //     if(user.password.match(loginForm.value.password)){
    //       flag=1;
    //       alert("Welcome to page");
    //       this.adminLoginService.logIn();
    //     }
    //   }
    // }
    if(loginForm.value.email =='pradeepdaiva@gmail.com' && loginForm.value.password==123456){
      flag=1;
      this.validSuccess=true;
      loginForm.reset();
      this.successAlert();
    }
    if(flag==0){
      // alert("Invalid user");
      this.validDanger=true;
      loginForm.reset();
      this.dangerAlert();
    }

   
  }

  successAlert(){
    setTimeout(()=>{
      this.validSuccess=false;
      this.adminLoginService.logIn();
    },1800)
  }

  dangerAlert(){
    setTimeout(()=>{
      this.validDanger=false;
    },2500)
  }

  getUserDetails(){
    this.adminLoginService.getUserRegistry().subscribe((data)=>
    {
    console.log(data);
    this.userData=data;
        for(let user of this.userData){
         console.log(user);  
        } });
  }

 
  

}
