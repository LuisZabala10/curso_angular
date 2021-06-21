import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'constrasena'
})
export class ConstrasenaPipe implements PipeTransform {

  transform(value: string, mostrar: boolean): string {

    if (mostrar) {
      return value;    
    }
    else{
      return '*'.repeat(value.length);
    }

  }

}
