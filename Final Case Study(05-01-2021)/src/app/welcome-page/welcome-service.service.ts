import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WelcomeServiceService {

  constructor(private http:HttpClient,private router:Router) { }  


  getSection(){
    return this.http.get('http://localhost:8080/bookSection');

  }
}
