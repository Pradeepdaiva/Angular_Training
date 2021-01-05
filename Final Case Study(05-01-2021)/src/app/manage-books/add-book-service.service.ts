import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddBookServiceService {

  constructor(private http:HttpClient) { }

  addBook(book){
    this.http.post('http://localhost:8080/books',book)
    .subscribe(data => {
      console.log(data);
    });
  }

  getSection(){
    return this.http.get('http://localhost:8080/bookSection');
  }

  addSection(name){
    return this.http.post('http://localhost:8080/bookSection',name);
}

deleteSection(sectionId){
  return this.http.delete('http://localhost:8080/bookSection/'+sectionId);
}
}
