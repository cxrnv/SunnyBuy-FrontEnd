import { ComputersService } from '../../computers/computers.service';
import { GetComputer } from '../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-computer-detail',
  templateUrl: './computer-detail.component.html',
  styleUrls: ['./computer-detail.component.css']
})
export class ComputerDetailComponent implements OnInit {

  id: any;
  computer : GetComputer;

  constructor(private computersService : ComputersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.get();
  }

 get()
 {
   this.computersService._getComputerDetail(this.id)
   .subscribe(detail => 
    {
      this.computer = detail;
    })
 }

}
