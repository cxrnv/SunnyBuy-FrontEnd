import { HomePageComponent } from './home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchModule } from '../../core/pipes/search/search.module';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    Ng2SearchPipeModule,
    CommonModule,
    RouterModule,
    SearchModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule
  ],
  declarations: [
    HomePageComponent,
    NavComponent,
    FooterComponent,
    CarouselComponent,
    CategoryComponent,
    HeaderComponent
  ],
  exports:
    [
      HomePageComponent,
      NavComponent,
      FooterComponent,
      CarouselComponent,
      CategoryComponent,
      HeaderComponent
    ]
})

export class HomeModule { }
