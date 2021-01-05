import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {



  constructor(private service:ServiceService,private router:Router) { }

  details:any=this.service.userDetails
  
  ngOnInit(): void {
    
  }

  return(){
    this.router.navigate(['/home']);
  }

}
