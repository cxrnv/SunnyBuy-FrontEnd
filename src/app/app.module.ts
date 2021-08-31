import { PaymentTypeChoosePageComponent } from './pages/payment/payment-type-choose/main/payment-type-choose-page/payment-type-choose-page.component';
import { ComputersCategoryComponent } from './pages/products/products-category/computers/components/computers-category/computers-category.component';
import { ComputersHeaderComponent } from './pages/products/products-category/computers/components/computers-header/computers-header.component';
import { PaymentTypeHeaderComponent } from './pages/payment/payment-type-choose/components/payment-type-header/payment-type-header.component';
import { ComputerDetailComponent } from './pages/products/products-category/computers/components/computer-detail/computer-detail.component';
import { ComputersCardComponent } from './pages/products/products-category/computers/components/computers-card/computers-card.component';
import { CreditcardHeaderComponent } from './pages/payment/creditcard/components/creditcard-header/creditcard-header.component';
import { BilletHeaderComponent } from './pages/payment/billet/components/billet-header/billet-header.component';
import { ComputersComponent } from './pages/products/products-category/computers/computers/computers.component';
import { CreditcardPageComponent } from './pages/payment/creditcard/creditcard-page/creditcard-page.component';
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
import { HomePageComponent } from './pages/home/containers/home-page/home-page.component';
import { CarouselComponent } from './pages/home/components/carousel/carousel.component';
import { NavComponent } from './pages/home/components/nav/nav.component';
import { CategoryComponent } from './pages/home/components/category/category.component';
import { HeaderComponent } from './pages/home/components/header/header.component';
import { FooterComponent } from './pages/home/components/footer/footer.component';
import { ClientPageComponent } from './pages/client/client-page.component';
import { BilletPageComponent } from './pages/payment/billet/main/billet-page/billet-page.component';
import { PixHeaderComponent } from './pages/payment/pix/components/pix-header/pix-header.component';
import { AddCardComponent } from './pages/payment/creditcard/components/add-card/add-card.component';
import { CartHeaderComponent } from './pages/cart/cart-header/cart-header.component';
import { ClientNavComponent } from './pages/client/client-nav/client-nav.component';
import { HelpPageComponent } from './pages/help/container/help-page/help-page.component';
import { PixPageComponent } from './pages/payment/pix/main/pix-page/pix-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavComponent,
    CartPageComponent,
    CarouselComponent,
    CategoryComponent,
    HeaderComponent,
    FooterComponent,
    ComputersComponent,
    ComputersHeaderComponent,
    ComputersCategoryComponent,
    ComputersCardComponent,
    ClientPageComponent,
    ClientNavComponent,
    ClientHeaderComponent,
    CartHeaderComponent,
    HelpPageComponent,
    CreditcardPageComponent,
    PaymentTypeChoosePageComponent,
    PaymentTypeHeaderComponent,
    CreditcardHeaderComponent,
    BilletPageComponent,
    BilletHeaderComponent,
    PixHeaderComponent,
    PixPageComponent,
    AddCardComponent,
    ComputerDetailComponent
],

  imports: [
    BrowserModule,
    AuthModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
