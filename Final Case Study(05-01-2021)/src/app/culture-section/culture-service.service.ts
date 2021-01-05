import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CultureServiceService {

  constructor(private http:HttpClient) { }

  getDetails(){
    return this.http.get('http://localhost:8080/books');
  }

  getSection(){
    return this.http.get('http://localhost:8080/bookSection');
  }

  postBorrower(data){
    return this.http.post('http://localhost:8080/borrower/',data);

  }


  getBorrowerData(){
    return this.http.get('http://localhost:8080/borrower');
  }

  updateQuantity(book){
    return this.http.put('http://localhost:8080/books/'+book.bookId,book);
  }

}
