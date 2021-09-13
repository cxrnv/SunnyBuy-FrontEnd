import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordPipe } from './password.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PasswordPipe],
  exports: [PasswordPipe]
})
export class PasswordModule { }
