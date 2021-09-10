import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchModule } from './../../core/search/search.module';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SearchModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
      NavComponent,
      FooterComponent,
      CarouselComponent,
      CategoryComponent,
      HeaderComponent
  ],
  exports: 
  [
      NavComponent,
      FooterComponent,
      CarouselComponent,
      CategoryComponent,
      HeaderComponent
  ]
})

export class HomeModule { }
