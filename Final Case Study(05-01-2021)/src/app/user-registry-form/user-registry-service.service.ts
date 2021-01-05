import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRegistryServiceService {

  constructor(private http:HttpClient) { }
  addUser(userData){
    this.http.post('http://localhost:8080/userRegistry/',userData)
    .subscribe((data)=>{
      console.log(data);
    });
  }

  checkUser(){
    return this.http.get('http://localhost:8080/userRegistry');
  }
  
}
