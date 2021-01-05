import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IUserData } from './IUserData.model';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }


  addUser(userData){
    console.log(userData)
    this.http.post('http://localhost:8080/registrationDetails',userData)
    .subscribe(data =>{
      console.log(data);
      
    });
  }

  deleteAll(){
    let name;
    console.log(name)
    this.http.delete('http://localhost:8080/registrationDetails/'+12)
     .subscribe();
    console.log(name)

  }

  // getUserData(): Observable<IUserData []> {
  //    return this.http.get<IUserData []>('http://localhost:8080/registrationDetails/')
  //    .pipe(
  //      tap(data =>
  //       console.log('All:' +JSON.stringify(data)))
  //    );
  // }
  getUserData(){
    return this.http.get('http://localhost:8080/registrationDetails');
  }

  getSelected(){
    return this.http.get('http://localhost:8080/registrationDetails/'+22);
    }
      

      // .pipe(
      //   tap(data => console.log('All:' + JSON.stringify(data)))
      // );
  

  
}

