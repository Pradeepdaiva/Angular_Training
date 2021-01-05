import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  setData(details){
    this.http.post('https://productcollection-41b7e-default-rtdb.firebaseio.com/posts.json',details)
    .subscribe(data =>
      {
        console.log(data)
      })
  }

 

}

