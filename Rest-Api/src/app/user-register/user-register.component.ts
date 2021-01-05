import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Product } from './product.model';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(private service:ServiceService,private http:HttpClient) { }
details;
  ngOnInit(): void {
  
  }
  

  registerForm=new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',Validators.required)
  });

  onSubmit(){
   this.service.setData(this.registerForm.value)
   console.log(this.registerForm.value)
  }

  getData(){
    this.http.get<{ [key:string]: Product}>('https://productcollection-41b7e-default-rtdb.firebaseio.com/posts.json')
    .pipe(map((responseData: {[key:string]: Product}) => {
      const productArray : Product[] =[];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          productArray.push({...responseData[key],id:key});
        }
      }
      return productArray;
    }))
    .subscribe(product =>{
      this.details=product
    })
  }

  check(){
console.log(this.registerForm)
return  this.registerForm.invalid
  }

 
}
