import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { BookSectionServiceService } from './book-section-service.service';

@Component({
  selector: 'app-book-section',
  templateUrl: './book-section.component.html',
  styleUrls: ['./book-section.component.css']
})
export class BookSectionComponent implements OnInit {

  constructor(private bookService:BookSectionServiceService,
    private route:ActivatedRoute) { }

    id;
    status;
    sId;
    buttonHidden=false;
    successAlert=false;
    warningAlert=false;
    limitExist=false;
  ngOnInit(): void {
    this.getData();
    this.getSection();
    this.getBorrowerDetails();
    this.route.queryParams.subscribe(param =>{
      this.id=param['id'];
      this.status=param['status'];
      this.sId=param['sId'];
      console.log(this.id);
      if(this.id==undefined){
        this.buttonHidden=true;
      }
    });
    
  }
allBooks;
books=[];
  getData(){
    this.bookService.getDetails().subscribe((data)=>{
      this.allBooks=data;
      console.log(this.allBooks);
      for(let book of this.allBooks){
        if(book.sectionId==this.sId){
          this.books.push(book);
        }
      }
    })
  }

  addSection;
  section=[];
  getSection(){
    this.bookService.getSection().subscribe(data =>{
      this.addSection=data;
      for(let sec of this.addSection){
        if(sec.sectionId==this.sId){
          this.section.push(sec);
        }
      }
      console.log(this.section);
    })
  }

  borrowerDetails:{userId:number,bookId:number,status:string,available:number}
  updateQuantity:{bookId:number,bookImage:string,isbnNumber:number,bookName:string,authorName:string,
    description:string,noOfBooks:number,sectionId:number}
  borrow(book){
    console.log(book);
    this.borrowerDetails={
      userId:this.id,
      bookId:book.bookId,
      status:'Borrowed',
      available:0
    }
    this.updateQuantity={
      bookId:book.bookId,
      bookImage:book.bookImage,
      isbnNumber:book.isbnNumber,
      bookName:book.bookName,
      authorName:book.authorName,
      description:book.description,
      noOfBooks:book.noOfBooks-1,
      sectionId:book.sectionId
    }
    console.log(this.updateQuantity);
    console.log(this.borrowerDetails);

    let flag=0;
    let available=0;
    let count=1;
    for(let check of this.details){
      if(check.userId==this.borrowerDetails.userId && check.available==0 && check.status=='Borrowed'){
        count+=1;
      }
    }

    // Quantity check Method
    // for(let book of this.books ){
    //   if(book.bookId===this.updateQuantity.bookId){
    //     if(book.noOfBooks>=3){
    //       available=1;
    //     }
    //   }
    // }

    // if(available==1){
      for(let detail of this.details){
        let userId:number=detail.userId;
        if(userId==this.borrowerDetails.userId){
          if(detail.bookId==this.borrowerDetails.bookId  && detail.status=='Borrowed' && detail.available==0){
            flag=1;
          }
        }
        
      }
    // }else{alert('Out of Stock');}
    
    // if( available==1){
      if(count<=2){
        if(flag==0){
          // alert('Book Borrowed');
          this.successAlert=true;
          this.bookService.updateQuantity(this.updateQuantity).subscribe(()=>{
            // this.getData();
          });
          this.bookService.postBorrower(this.borrowerDetails).subscribe(()=>{
            this.getBorrowerDetails();
          });
          this.alertSuccess();
        }else
        {
          this.warningAlert=true;
          this.alertWarning();
          // alert('Already Book borrowed');
        }
  
      }else{
        this.limitExist=true;
        this.alertLimit();
        // alert('You already exist the Limit');
      }  

    // }
   
    
  }

  alertSuccess(){
    setTimeout(()=>{
      this.successAlert=false;
    },2500);
  }

  alertWarning(){
    setTimeout(()=>{
      this.warningAlert=false;
    },2500);
  }

  alertLimit(){
    setTimeout(()=>{
      this.limitExist=false;
    },2500)
  }

details;
  getBorrowerDetails(){
    this.bookService.getBorrowerData().subscribe((data)=>{
      this.details=data;
      console.log(this.details);
    });

  }

  
  bookDescription(book){
    this.passToDescription(book);
  }

  description:any={}
passToDescription(bookDescription){
  this.description=bookDescription;
  console.log(this.description);
}
  
 

}
