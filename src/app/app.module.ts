import { ComputersHeaderComponent } from './pages/products/products-category/computers/components/computers-header/computers-header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { AuthModule } from './pages/auth/auth.module';
import { HomePageComponent } from './pages/home/containers/home-page/home-page.component';
import { CarouselComponent } from './pages/home/components/carousel/carousel.component';
import { NavComponent } from './pages/home/components/nav/nav.component';
import { CategoryComponent } from './pages/home/components/category/category.component';
import { HeaderComponent } from './pages/home/components/header/header.component';
import { FooterComponent } from './pages/home/components/footer/footer.component';
import { ComputersComponent } from './pages/products/products-category/computers/containers/computers/computers.component';
import { ComputersCategoryComponent } from './pages/products/products-category/computers/components/computers-category/computers-category.component';
import { ComputersCardComponent } from './pages/products/products-category/computers/components/computers-card/computers-card.component';
import { ClientPageComponent } from './pages/client/containers/client-page/client-page.component';
import { ClientNavComponent } from './pages/client/components/client-nav/client-nav.component';
import { ClientHeaderComponent } from './pages/client/components/client-header/client-header.component';
import { CartPageComponent } from './pages/cart/containers/cart-page/cart-page.component';
import { CartNavComponent } from './pages/cart/components/cart-nav/cart-nav.component';
import { CartHeaderComponent } from './pages/cart/components/cart-header/cart-header.component';
import { HelpPageComponent } from './pages/help/container/help-page/help-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavComponent,
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
    CartPageComponent,
    CartNavComponent,
    CartHeaderComponent,
    HelpPageComponent
],

  imports: [
    BrowserModule,
    AuthModule,
    DashboardModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
