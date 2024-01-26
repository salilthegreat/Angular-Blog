import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLength',
  standalone: true
})
export class MaxLengthPipe implements PipeTransform {

  transform(str: string, arg:number): unknown {
    const data = str.slice(0,arg) + '...'
    return data;
  }

}
