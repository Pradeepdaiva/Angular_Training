import { Component, OnInit } from '@angular/core';
import { ViewBooksServiceService } from '../view-all-books/view-books-service.service';
import { UserProfileService } from './user-profile.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor(private userRegistryService:UserProfileService) { }

   phoneNumber;
   searchItem='';

  ngOnInit(): void {
   this.getUsers();
  }
 
  allUsers;
  getUsers(){
    this.userRegistryService.getAllUsers().subscribe((data)=>{
      this.allUsers=data;
      console.log(this.allUsers)
    })
  }
  
  removeUser;
  passUser(user){
    this.removeUser=user;
  }
  deleteUser(){
    console.log(this.removeUser);
  }

}
