import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLoginServiceService } from '../admin-login/admin-login-service.service';
import { DashBoardServiceService } from './dash-board-service.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  menus;
  constructor( private service:DashBoardServiceService,
    private loginService:AdminLoginServiceService,private route:Router) { }

  ngOnInit(): void {
    this.menus=this.service.dashBoardMenus;
  }

  logOutFromAdmin(){
    this.loginService.logOut();
    this.route.navigate(['/adminLogin']);
  }


}
