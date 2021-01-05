import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SqlServiceService } from './sql-service.service';

@Component({
  selector: 'app-sql-section',
  templateUrl: './sql-section.component.html',
  styleUrls: ['./sql-section.component.css']
})
export class SqlSectionComponent implements OnInit {

  alreadyBorrowed=false;
  borrowed=false;
  constructor(private sqlService:SqlServiceService,
    private route:ActivatedRoute) { }
    id;
    buttonHidden=false;
  ngOnInit(): void {
    
    this.getData();
    this.getSection();
    this.getBorrowerDetails();
    this.route.queryParams.subscribe(param =>{
      this.id=param['id'];
      console.log(this.id);
      if(this.id==undefined){
        this.buttonHidden=true;
      }
    });
    
  }
allBooks;
books=[];
  getData(){
    this.sqlService.getDetails().subscribe((data)=>{
      this.allBooks=data;
      console.log(this.allBooks);
      for(let book of this.allBooks){
        if(book.sectionId==12){
          this.books.push(book);
        }
      }
    })
  }

  section=[];
  getSection(){
    this.sqlService.getSection().subscribe(data =>{
      this.section.push(data);
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
          this.borrowed=true;
          this.sqlService.updateQuantity(this.updateQuantity).subscribe(()=>{
            // this.getData(); 
          });
          this.sqlService.postBorrower(this.borrowerDetails).subscribe(()=>{
            this.getBorrowerDetails();
          });
          setTimeout(()=>{
            this.borrowAlert();
          },1000);
          
        }else
        {
          alert('Already Book borrowed');
         
          
        }
  
      }else{
        this.alreadyBorrowed=true;
        // alert('You already exist the Limit');
        setTimeout(() => {
          this.limitExits();
        }, 1000)
      }  

    // }
   
    
  }

  limitExits(){
    this.alreadyBorrowed=false;
  }

  borrowAlert(){
    this.borrowed=false;
  }

details;
  getBorrowerDetails(){
    this.sqlService.getBorrowerData().subscribe((data)=>{
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

