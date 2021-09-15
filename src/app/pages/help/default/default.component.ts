import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  constructor
  (
    private route: Router
  ) { }


  ngOnInit() {
  }

  goToChat()
  {
    this.route.navigateByUrl('help/chat');
  }
}
