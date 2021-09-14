import { HelpModule } from './pages/help/help.module';
import { ClientModule } from './pages/client/client.module';
import { CartModule } from './pages/cart/cart.module';
import { HomeModule } from './pages/home/home.module';
import { PurchaseModule } from './pages/purchase/purchase.module';
import { MatInputModule } from '@angular/material/input';
import { PaymentTypeChoosePageComponent } from './pages/payment/payment-type-choose-page.component';
import { PaymentTypeHeaderComponent } from './pages/payment/payment-header/payment-type-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './pages/auth/auth.module';
import { HelpPageComponent } from './pages/help/help-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { PasswordModule } from './core/password/password.module';
import { PaymentModule } from './pages/payment/payment.module';
import { ProductsModule } from './pages/products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    PaymentTypeChoosePageComponent,
    PaymentTypeHeaderComponent,
  ],

  imports: [
    AuthModule,
    HelpModule,
    AppRoutingModule,
    ClientModule,
    CartModule,
    PasswordModule,
    MatSnackBarModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    ToastrModule.forRoot(),
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    ProductsModule,
    PurchaseModule,
    PaymentModule,
    HomeModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
