import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { IssuedBookServiceService } from './issued-book-service.service';

@Component({
  selector: 'app-view-all-issued-books',
  templateUrl: './view-all-issued-books.component.html',
  styleUrls: ['./view-all-issued-books.component.css']
})
export class ViewAllIssuedBooksComponent implements OnInit {

  isbnNumber='';
  searchItem='';
  constructor(private issuedService:IssuedBookServiceService) { }

  ngOnInit(): void {
    this.getIssuedBooks();
    // this.searchBookId();
  }

  bookStatus;
  status='Borrowed';
  getIssuedBooks(){
    this.issuedService.getBookStatus().subscribe((data)=>{
      this.bookStatus=data;
      console.log(this.bookStatus);
     
    });

  }

  
  returnBook(book){
    console.log(book);
    this.searchBookId(book);
  }

  books;
  updateStatus:{userId:number,bookId:number,status:string,available:number}
  updateBook:{userId:number,bookId:number,status:string,available:number}
  updateBookQuantity:{bookId:number,bookImage:string,isbnNumber:number,bookName:string,authorName:string,
    description:string,noOfBooks:number,sectionId:number}
  searchBookId(searchBook){
    
    let id:number;
    let updateBook:any;
    this.issuedService.getBooksDetails().subscribe((data)=>{

      this.books=data;
      for(let book of this.books){
        if(book.isbnNumber == searchBook.isbnNumber){
           id=book.bookId;
           updateBook=book;
        }
      }
      this.updateStatus={
        userId:searchBook.userId,
        bookId:id,
        status:'Returned',
        available:0
      }
      console.log(this.updateStatus);
      this.issuedService.updateBookStatus(this.updateStatus).subscribe(()=>{
        // this.getIssuedBooks();
      })
      this.updateBook={
        userId:searchBook.userId,
        bookId:id,
        status:searchBook.status,
        available:0
      }
      console.log(this.updateBook);
      this.issuedService.updateBookAvailable(this.updateBook).subscribe((data)=>{
      
    });
    this.updateBookQuantity={
      bookId:updateBook.bookId,
      bookImage:updateBook.bookImage,
      isbnNumber:updateBook.isbnNumber,
      bookName:updateBook.bookName,
      authorName:updateBook.authorName,
      description:updateBook.description,
      noOfBooks:updateBook.noOfBooks+1,
      sectionId:updateBook.sectionId
    }
    console.log(this.updateBookQuantity);
    this.issuedService.updateBookQuantity(this.updateBookQuantity).subscribe(()=>{
      this.getIssuedBooks();
    });
  

    });
    
   
  
  }

}
