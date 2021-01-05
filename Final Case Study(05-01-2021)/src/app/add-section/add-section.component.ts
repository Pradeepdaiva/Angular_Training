import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddSectionService } from './add-section.service';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.css']
})
export class AddSectionComponent implements OnInit {


  sectionName='';
  constructor(private addService:AddSectionService,
    private router:Router) { }

  ngOnInit(): void {
  }

  postSection(section){
    console.log(section.value);
    this.addService.addSection(section.value);
    // this.router.navigate(['/dashBoard/manageBooks'])
  }

  return(){
this.router.navigate(['/dashBoard/manageBooks']);
  }


}
