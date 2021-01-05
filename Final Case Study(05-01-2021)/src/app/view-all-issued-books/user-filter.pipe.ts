import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFilter',
  pure:false
})
export class UserFilterPipe implements PipeTransform {

  transform(value:any,searchItem:any) {
    const dummyList=[];
    if(typeof searchItem ==="string"){
      if(searchItem!=null && value!=null){
        for (const data of value) {
          
          if(data.userName.toLowerCase().match(searchItem))
          dummyList.push(data)
        }
        if(dummyList.length!=0)
        return dummyList;
       // return value.filter((item) => item.includes(searchItem));
      }
    }
      if(typeof searchItem ==="number") {
        if(searchItem!=null && value!=null){
          for (const data of value) {
            
            if(data.isbnNumber===searchItem)
            dummyList.push(data)
          }
          if(dummyList.length!=0)
          return dummyList;
      }
      
    }
    return value;
   
  }
}
