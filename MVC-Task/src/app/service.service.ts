import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  updatedata;

  set(data){
    this.http.post('http://localhost:8080/addstudent',data).
    subscribe(data =>{
      console.log(data)
    });
  }


}
