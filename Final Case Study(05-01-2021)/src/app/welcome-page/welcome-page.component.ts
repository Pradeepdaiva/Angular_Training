import { LocationStrategy } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { WelcomeServiceService } from './welcome-service.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  name;

  show;
  hide;
  

  userId;
  status;

  constructor(private welcomeService:WelcomeServiceService,
    private router:Router,private route:ActivatedRoute,private location:LocationStrategy) { }

    particpateSubscription:Subscription;
  ngOnInit(): void {
    this.show=false;
    this.hide=true;
    this.getSectionName();
    this.particpateSubscription=this.route.queryParams.subscribe(
      params =>{
        this.userId=params['id'],
        this.status=params['status'];
        this.hide=params['status'];
      })
      this.show=this.status;
      console.log(this.userId);
      console.log(this.status);
      this.router.navigate(['/HomePage'],
      {
        queryParams:{id:this.userId,status:this.status}
      })
      history.pushState(null, null, window.location.href);  
    this.location.onPopState(() => {
      history.pushState(null, null, window.location.href);
    });
  }
 

getSectionName(){
  this.welcomeService.getSection().subscribe((data)=>{
    this.name=data;
  })
}

login(){
  this.router.navigate(['/userLogin']);
}
// ngOnDestroy(){
//   console.log('Destory the content from the process');
//   this.particpateSubscription.unsubscribe();
// }


logout(){
 this.hide=true;
 this.show=false;
this.router.navigate(['/welcome']);

}

userHistory(){
this.passToHistory();
}

passToHistory(){
  this.router.navigate(['/history'],
  {
    queryParams:{id:this.userId,status:this.status}
  });
}

home(){
  // this.viewStatus=true;
  // this.router.navigate([''],{
  //   queryParams:{ id: this.userId,status:true}
  // });
  this.router.navigate(['/welcome'],{
    queryParams:{ id: this.userId,status:this.status}
  });
}

aboutUs(){
  let hello:string='aboutUs';
  this.router.navigate(['/'+hello],{
    queryParams:{ id: this.userId,status:this.status}
  });
}

section(name){
  console.log(name.sectionName);
  let section:string=name.sectionName;
  let sectionId:number;
  for(let checkName of this.name){
    if(checkName.sectionName==section){
      sectionId=checkName.sectionId;
    }
  }
  this.router.navigate(['/'+section],{
    queryParams:{ id: this.userId,status:this.status,sId:sectionId}
  });
}

 
}