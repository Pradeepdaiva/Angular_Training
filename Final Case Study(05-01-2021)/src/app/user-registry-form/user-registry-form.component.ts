import { Component, OnInit } from '@angular/core';
import { UserRegistryServiceService } from './user-registry-service.service';

@Component({
  selector: 'app-user-registry-form',
  templateUrl: './user-registry-form.component.html',
  styleUrls: ['./user-registry-form.component.css']
})
export class UserRegistryFormComponent implements OnInit {

  constructor(private registrySerivce:UserRegistryServiceService) { }

  check=false;
  email:any;
  ngOnInit(): void {
    this.checkEmail();
  }
  showSuccess=false;
  showDanger=false;
  onSubmit(registryForm){
    console.log(registryForm.value.email);
    
      for(let e of this.email){
        if(e.email.match(registryForm.value.email)){
          this.check=true;
        }
      }
        if(this.check){
          this.showDanger=true;
          registryForm.reset();
          this.dangerAlert();
        }else{
          this.registrySerivce.addUser(registryForm.value);
          this.showSuccess=true;
          registryForm.reset();
          this.successAlert();
        }
   
  }

  successAlert(){
    setTimeout(()=>{
      this.showSuccess=false;
    },2500);
  }

  dangerAlert(){

    setTimeout(()=>{
      this.showDanger=false;
    },2500);

  }

  checkEmail(){
    this.registrySerivce.checkUser().subscribe(data =>{
      console.log(data);
      this.email=data;
    });

  }

  

}
