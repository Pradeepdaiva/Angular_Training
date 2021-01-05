import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MainPageServiceService } from './main-page-service.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

 
  constructor(private mainPageservice:MainPageServiceService) { }

  ngOnInit(): void {
    this.getCountOfUsers();
    this.getCountOfBooks();
    this.getCountOfIssuedBooks();
  }

  users;
  userCount=0;
 getCountOfUsers(){
   this.mainPageservice.getUsers().subscribe((data)=>{
     this.users=data;
     for(let user of this.users){
       this.userCount=this.userCount+1;
     }
   })
 }

 books;
 count=0;
 getCountOfBooks(){
   this.mainPageservice.getBooks().subscribe((data)=>{
     this.books=data;
     for(let book of this.books){
       this.count=this.count+book.noOfBooks;
     }
     console.log(this.count);
   })
   
 }

 issuedBooks;
 issuedCount=0;
 getCountOfIssuedBooks(){
   this.mainPageservice.getIssuedBook().subscribe((data)=>{
     this.issuedBooks=data;
     for(let issue of this.issuedBooks){
       if(issue.available==0){
         this.issuedCount=this.issuedCount+1;
       }
     }
   })
 }

}
