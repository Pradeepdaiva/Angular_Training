import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testingPipe'
})
export class TestingPipePipe implements PipeTransform {

  transform(value:any){
    return Object.values(value);
  }

}
