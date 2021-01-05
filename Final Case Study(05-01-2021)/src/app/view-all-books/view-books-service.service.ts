import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewBooksServiceService {

  constructor(private http:HttpClient) { }

  getBook;
  setBook(book){
this.getBook=book;
console.log(this.getBook);
  }

  getBooks(){
    return this.http.get('http://localhost:8080/books');
  }

  getSection(){
    return this.http.get('http://localhost:8080/bookSection');
  }



  deleteBook(book){
    return this.http.delete('http://localhost:8080/books/'+book.bookId);
  }
}
