import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserHistoryServiceService {

  constructor(private http:HttpClient) { }

  getBorrowedDetails(){
    return this.http.get('http://localhost:8080/history');
  }
}
