import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:ServiceService,private router:Router) { }

  

  ngOnInit(): void {
    
  }

  onSubmit(loginForm){
    console.log(loginForm.value)
    this.service.set(loginForm.value)
    this.router.navigate(['/home'])
  }
 


}
