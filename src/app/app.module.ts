import { HomeModule } from './pages/home/home.module';
import { PurchaseModule } from './pages/purchase/purchase.module';
import { MatInputModule } from '@angular/material/input';
import { PaymentTypeChoosePageComponent } from './pages/payment/payment-type-choose-page.component';
import { ProductsCategoryComponent } from './pages/products/products-category/products-category.component';
import { ProductsHeaderComponent } from './pages/products/products-header/products-header.component';
import { PaymentTypeHeaderComponent } from './pages/payment/payment-header/payment-type-header.component';
import { ProductDetailComponent } from './pages/products/product-detail/product-detail.component';
import { ProductsCardComponent } from './pages/products/products-card/products-card.component';
import { ProductsComponent } from './pages/products/products.component';
import { CreditcardPageComponent } from './pages/payment/creditcard/creditcard-page.component';
import { ClientHeaderComponent } from './pages/client/client-header/client-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartPageComponent } from './pages/cart/cart-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './pages/auth/auth.module';
import { HomePageComponent } from './pages/home/home-page.component';
import { ClientPageComponent } from './pages/client/client-page.component';
import { BilletPageComponent } from './pages/payment/billet/billet-page.component';
import { CartHeaderComponent } from './pages/cart/cart-header/cart-header.component';
import { ClientNavComponent } from './pages/client/client-nav/client-nav.component';
import { HelpPageComponent } from './pages/help/help-page.component';
import { PixPageComponent } from './pages/payment/pix/pix-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CreditCardMaskModule } from './core/pipes/credit-card/CreditCardMask.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { SearchModule } from './core/pipes/search/search.module';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { PasswordModule } from './core/password/password.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CartPageComponent,
    ProductsComponent,
    ProductsHeaderComponent,
    ProductsCategoryComponent,
    ProductsCardComponent,
    ClientPageComponent,
    ClientNavComponent,
    ClientHeaderComponent,
    CartHeaderComponent,
    HelpPageComponent,
    CreditcardPageComponent,
    PaymentTypeChoosePageComponent,
    PaymentTypeHeaderComponent,
    BilletPageComponent,
    PixPageComponent,
    ProductDetailComponent,
  ],
  
  imports: [
    PasswordModule,
    NgxQRCodeModule,
    MatSnackBarModule,
    BrowserModule,
    AuthModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    CreditCardMaskModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    PurchaseModule,
    HomeModule,
    SearchModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
