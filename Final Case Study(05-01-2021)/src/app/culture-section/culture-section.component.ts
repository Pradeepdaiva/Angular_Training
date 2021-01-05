import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CultureServiceService } from './culture-service.service';

@Component({
  selector: 'app-culture-section',
  templateUrl: './culture-section.component.html',
  styleUrls: ['./culture-section.component.css']
})
export class CultureSectionComponent implements OnInit {

  constructor(private cultureService:CultureServiceService,
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
    this.cultureService.getDetails().subscribe((data)=>{
      this.allBooks=data;
      console.log(this.allBooks);
      for(let book of this.allBooks){
        if(book.sectionId==26){
          this.books.push(book);
        }
      }
    })
  }

  section=[];
  getSection(){
    this.cultureService.getSection().subscribe(data =>{
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
          alert('Book Borrowed');
          this.cultureService.updateQuantity(this.updateQuantity).subscribe(()=>{
            // this.getData();
          });
          this.cultureService.postBorrower(this.borrowerDetails).subscribe(()=>{
            this.getBorrowerDetails();
          });
        }else
        {
          alert('Already Book borrowed');
        }
  
      }else{
        alert('You already exist the Limit');
      }  

    // }
   
    
  }

details;
  getBorrowerDetails(){
    this.cultureService.getBorrowerData().subscribe((data)=>{
      this.details=data;
      console.log(this.details);
    });

  }

  
  bookDescription(book){
    this.passToDescription(book);
  }

  cultureDescription:any={}
passToDescription(bookDescription){
  console.log(bookDescription);
  this.cultureDescription=bookDescription;
  console.log(this.cultureDescription);
}
  
 

}
