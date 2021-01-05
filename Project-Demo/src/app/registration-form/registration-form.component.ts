import { Component, OnInit } from '@angular/core';
import { IUserData } from '../IUserData.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  constructor(private service:ServiceService) { }
  // userdetails:IUserData[];
userdetails;
  ngOnInit(): void {

    this.getDetails()
    
  }
  getDetails(){
    this.service.getUserData().subscribe(data =>{
      console.log(data)
      this.userdetails=data;
    })
    this.service.getSelected().subscribe(data =>{
      console.log(data)
    });
      
  }

  onSubmit(userData){
    console.log(userData.value);
    this.service.addUser(userData.value);
  }
  deleteAll(){
    this.service.deleteAll();
  }

 
  

}
