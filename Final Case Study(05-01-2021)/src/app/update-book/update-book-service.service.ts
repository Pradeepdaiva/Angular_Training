import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ViewBooksServiceService } from '../view-all-books/view-books-service.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateBookServiceService {

  constructor(private http:HttpClient) { }

  update(book){
    console.log(book);
    console.log(book.bookId);
    return this.http.put('http://localhost:8080/books/'+book.bookId,book);
  }

 
}
