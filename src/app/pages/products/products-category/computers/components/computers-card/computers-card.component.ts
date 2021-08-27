import { ComputersService } from '../../computers/computers.service';
import { GetComputer } from '../../models/computer.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computers-card',
  templateUrl: './computers-card.component.html',
  styleUrls: ['./computers-card.component.css']
})
export class ComputersCardComponent implements OnInit {

  computers : GetComputer[] = [];

  constructor(private computersService : ComputersService) { }

  ngOnInit(): void {
    this.get();
  }

 get()
 {
   this.computersService._getcomputers()
   .subscribe(computer => 
    {
      this.computers = computer;
    })
 }
}
