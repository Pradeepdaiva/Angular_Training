import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IssuedBookServiceService {

  constructor(private http:HttpClient) { }

  // getBorrowerDetails(){
  //   return this.http.get('http://localhost:8080/borrowerDetails');
  // }
  getBorrowerDetails(){
    return this.http.get('http://localhost:8080/borrower');
  }

  getBookStatus(){
    return this.http.get('http://localhost:8080/history');
  }

  getBooksDetails(){
    return this.http.get('http://localhost:8080/books');
  }

  // updateBookStatus(bookStatus){
  //   return this.http.post('http://localhost:8080/borrowerDetails/',bookStatus);
  // }

  updateBookStatus(bookStatus){
    return this.http.post('http://localhost:8080/borrower/',bookStatus);
  }

  updateBookAvailable(bookStatus){
    return this.http.put('http://localhost:8080/borrower/'+bookStatus.userId,bookStatus);
  }

  updateBookQuantity(book){
    return this.http.put('http://localhost:8080/books/'+book.bookId,book);
  }
}
