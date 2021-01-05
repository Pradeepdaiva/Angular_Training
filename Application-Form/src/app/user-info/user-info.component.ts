import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginFormComponent } from '../login-form/login-form.component';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private service:ServiceService,private router:Router) { }

  list=this.service.company;
  ngOnInit(): void {

  }
  gender=['male','female']
  userForm=new FormGroup({
    'firstName':new FormControl('', Validators.required),
    'lastName':new FormControl('',Validators.required),
    'gender': new FormControl('male'),
    'emailId':new FormControl('',[Validators.required,Validators.email]),
   'password' :new FormControl('',[Validators.required,Validators.minLength(6)]),
    'number':new FormControl('',Validators.required),
    'city':new FormControl('',Validators.required),
    'file':new FormControl('')
  })

  f=this.userForm.controls;
  onSubmit(){
    console.log(this.userForm.value)
  this.service.userDetails=this.userForm.value;
  this.router.navigate(['/details']);
  }

}
