import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PixPageComponent } from './pix/pix-page.component';
import { CreditcardPageComponent } from './creditcard/creditcard-page.component';
import { BilletPageComponent } from './billet/billet-page.component';
import { HomeModule } from './../home/home.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CreditCardMaskModule } from 'src/app/core/pipes/credit-card/CreditCardMask.module';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
    declarations: [
        BilletPageComponent,
        CreditcardPageComponent,
        PixPageComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        MatButtonModule,
        HomeModule,
        FormsModule,
        ReactiveFormsModule,
        CreditCardMaskModule,
        Ng2SearchPipeModule,
        NgxQRCodeModule,
    ],
    exports:
        [
            BilletPageComponent,
            CreditcardPageComponent,
            PixPageComponent
        ]
})
export class PaymentModule { }