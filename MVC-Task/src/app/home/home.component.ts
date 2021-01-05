import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { uptime } from 'process';
import { VirtualTimeScheduler } from 'rxjs';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:ServiceService,private http:HttpClient,private router:Router) { }
  details:any;
  ngOnInit(): void {
  this.getdetails()
    
  }
  getdetails(){
    let detail:any;
    this.http.get('http://localhost:8080/student').subscribe(data =>{
     console.log(data)
     this.details=data;
    })
  }
  delete(data){
    console.log(data.id)
    this.http.delete("http://localhost:8080/student/"+data.id).subscribe(()=>{
      this.getdetails();
    });

  }
  update(data){
    this.service.updatedata=data;
    console.log(this.service.updatedata)
    this.router.navigate(['/update'])
      
  }

}
