import { ComputersService } from '../../computers/computers.service';
import { GetComputer } from '../../models/computer.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computer-detail',
  templateUrl: './computer-detail.component.html',
  styleUrls: ['./computer-detail.component.css']
})
export class ComputerDetailComponent implements OnInit {

  computer : GetComputer[] = [];

  constructor(private computersService : ComputersService) { }

  ngOnInit() {
    this.get();
  }

  get()
  {
    this.computersService._getComputerDetail()
    .subscribe(c => 
      {
        this.computer = c;
      })
  }

}
