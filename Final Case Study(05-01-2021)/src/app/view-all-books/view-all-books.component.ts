import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewBooksServiceService } from './view-books-service.service';

@Component({
  selector: 'app-view-all-books',
  templateUrl: './view-all-books.component.html',
  styleUrls: ['./view-all-books.component.css']
})
export class ViewAllBooksComponent implements OnInit {

  books;
  section;

  sectionName=[];

  constructor(private viewBookService:ViewBooksServiceService,
    private router:Router) { }

  searchItem='';
  isbnNumber='';
 

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.viewBookService.getBooks().subscribe(data =>{
      console.log(data);
      this.books=data;
    console.log(this.books);
  
  
    this.viewBookService.getSection().subscribe(data =>{
      console.log(data)
     this.section=data;
     console.log(this.section);
    for(let book of this.books){
      for(let sec of this.section){
        if(book.sectionId === sec.sectionId){
          this.sectionName.push(sec.sectionName);
        }
      }
     
    }
    console.log(this.sectionName);
  });
 
});

}
getBook:{bookId:number,bookImage:string,isbnNumber:number,bookName:string,authorName:string,
  description:string,noOfBooks:number,sectionId:number}
singleBook(book){
  console.log(book);
  this.getBook=book;
}

editBook:{bookId:number,bookImage:string,isbnNumber:number,bookName:string,authorName:string,
  description:string,noOfBooks:number,sectionId:number}
  updateBook(addBook){
  console.log(addBook);
  this.editBook={
    bookId:addBook.bookId,
    bookImage:addBook.bookImage,
    isbnNumber:addBook.isbnNumber,
    bookName:addBook.bookName,
    authorName:addBook.authorName,
    description:addBook.description,
    noOfBooks:addBook.noOfBooks,
    sectionId:addBook.sectionId,
   } 
   console.log(this.editBook);
   this.viewBookService.setBook(this.editBook);
  this.router.navigate(['/update']);
  //  this.viewBookService.updateBook(this.updateBook);
}

deleteBook(book){

  console.log(book);
  this.viewBookService.deleteBook(book).subscribe(()=>{
    this.getBooks();
  });
  
}




    

}
