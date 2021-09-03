import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class CreditCardMaskPipe implements PipeTransform {

  transform(value: any){
    return '**** **** **** '+ value.substr(12,16);
  }
}
