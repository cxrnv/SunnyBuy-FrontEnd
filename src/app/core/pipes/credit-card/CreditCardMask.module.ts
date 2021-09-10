import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardMaskPipe } from './CreditCardMask.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:
  [
    CreditCardMaskPipe
  ],
  declarations: [
    CreditCardMaskPipe
  ]
})
export class CreditCardMaskModule { }
