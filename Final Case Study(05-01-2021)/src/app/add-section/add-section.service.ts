import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddSectionService {

  constructor(private http:HttpClient) { }

  addSection(name){
    this.http.post('http://localhost:8080/bookSection',name);
}

}
