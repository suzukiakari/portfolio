import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiel',
  templateUrl: './profiel.component.html',
  styleUrls: ['./profiel.component.css']
})
export class ProfielComponent implements OnInit {
  pics:string[];

  constructor() {
  }

  ngOnInit() {
    this.pics = ['left.jpg', 'center.jpg', 'right.jpg'];
  }
}
