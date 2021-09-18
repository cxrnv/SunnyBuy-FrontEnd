import { MessageComponent } from './message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HomeModule } from './../home/home.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CreditCardMaskModule } from 'src/app/core/pipes/credit-card/CreditCardMask.module';

@NgModule({
  declarations: [
      MessageComponent
],
imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    HomeModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    CreditCardMaskModule,
  ],
  exports:
    [
        MessageComponent
    ]
})
export class MessagesModule { }
