import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserHistoryServiceService } from './user-history-service.service';

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.css']
})
export class UserHistoryComponent implements OnInit {

  history;
  available1='Pending';
  available2='Returned';
  constructor(private borrowerHistory:UserHistoryServiceService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getDetails();
  }

  userHistory=[];
  userId;
  getDetails(){
  this.route.queryParams.subscribe(
      params =>{
        this.userId=params['id']
      });
    this.borrowerHistory.getBorrowedDetails().subscribe((data)=>{
      this.history=data;
      console.log(this.history);
      for(let h of this.history){
        if(h.userId==this.userId){
          this.userHistory.push(h);
        }
      }
    })
  }


}
