import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
  }

  apply(cmp){
    
    this.service.company=cmp;
    this.router.navigate(['/user-info']);
    
    console.log(cmp)

  }
  company=[{
    url:'../../assets/infosys-logo.png',
    name:'Infosys'
  },
{
  url:'../../assets/288-2882161_copyright-2018-blue-ribbon-business-products-powered.png',
  name:'HP'
},
{
  url:'../../assets/Wipro_Logo.png',
  name:'Wipro'
}]

}
