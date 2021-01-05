import { Component, OnInit } from '@angular/core';
import { AddBookServiceService } from './add-book-service.service';

@Component({
  selector: 'app-manage-books',
  templateUrl: './manage-books.component.html',
  styleUrls: ['./manage-books.component.css']
})
export class ManageBooksComponent implements OnInit {

  constructor(private addBookService:AddBookServiceService) { }

  ngOnInit(): void {
    this.selectSection();
  }
  options;
  
  selectSection(){
    this.addBookService.getSection().subscribe(data =>{
      this.options=data;
    });
  }
book:{bookImage:string,isbnNumber:number,bookName:string,authorName:string,
  description:string,noOfBooks:number,sectionId:number}
  onSubmit(addBook){
   this.book={
    bookImage:addBook.value.bookImage,
    isbnNumber:addBook.value.isbnNumber,
    bookName:addBook.value.bookName,
    authorName:addBook.value.authorName,
    description:addBook.value.description,
    noOfBooks:addBook.value.noOfBooks,
    sectionId:addBook.value.sectionId,
   } 
   console.log(this.book);
   this.addBookService.addBook(this.book);
   addBook.reset(); 
  }

  add(){
    this.success=false;
  }

  sectionName;
  view=false;
  success;
  postSection(section){
    console.log(section.value.sectionName);
    let flag=0;
    let secName:any=section.value;
    console.log(secName);
    this.addBookService.getSection().subscribe((data)=>{
      this.sectionName=data;
      for(let sec of this.sectionName){
        if(sec.sectionName==secName.sectionName){
          flag=1;
        }
      }
      if(flag==0){
        this.success=true;
        this.view=false;
        console.log(secName); 
        this.addBookService.addSection(secName).subscribe(()=>{
          this.selectSection();
        });  
        section.reset();
      }else{
        this.view=true;
      }
     
    });
   
  }
  dropsection;
  available=true;
  deleteSection(sectionName){

    let flag=0;
      console.log(sectionName);
      let sectionId;
      for(let sec of this.options){
        if(sec.sectionName.match(sectionName.value.sectionName)){
         console.log(sec.sectionId);
         sectionId=sec.sectionId;
         flag=1;
        }
      }
      console.log(sectionId);
      if(flag==1){
        this.success=true;
        this.available=true;
        console.log(this.available);
        this.addBookService.deleteSection(sectionId).subscribe(()=>{
          this.selectSection();
        })
      }else{
        this.available=false;
      }
     
  sectionName.reset();
}

clearAll(addBook){
addBook.reset();
}

}
