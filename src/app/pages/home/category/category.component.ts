import { Category } from './../models/category.model';
import { Component, OnInit } from '@angular/core';
import { HomeService } from './../home.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  category: Category[];

  constructor(private homeservice: HomeService) { }

  ngOnInit(): void {
    this.homeservice
      .getCategory()
      .subscribe(x => this.category = x)
  }
}
