import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewBooksServiceService } from '../view-all-books/view-books-service.service';
import { UpdateBookServiceService } from './update-book-service.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  constructor(private viewService:ViewBooksServiceService,
    private router:Router,private updateService:UpdateBookServiceService) { }

  getBook;
  ngOnInit(): void {
    this.getBook=this.viewService.getBook;
  }
  onSubmit(addBook){
    console.log(addBook.value);
    this.updateService.update(addBook.value).subscribe((data)=>{
      console.log(data);
    });
    addBook.reset();
    this.router.navigate(['/dashBoard/viewAllBooks']);
  }

  return(){
    this.router.navigate(['/dashBoard/viewAllBooks']);
  }
}
