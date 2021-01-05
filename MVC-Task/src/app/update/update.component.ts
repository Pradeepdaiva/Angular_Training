import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private service:ServiceService,private http:HttpClient) { }
getData:{id:number,email:string,password:string}
  ngOnInit(): void {
    this.getData=this.service.updatedata;
  }

  

  onSubmit(loginForm){
    console.log(this.getData)
    console.log(loginForm.id)
    this.http.put('http://localhost:8080/student/'+loginForm.id,loginForm).
    subscribe((data)=>{
      console.log(data)
    });

  }
}
