import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { MycheckService } from '../mycheck.service';



@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})

export class LanguageComponent implements OnInit {

  constructor(private service:MycheckService) { }

  ngOnInit() {}

  getList() {
    return this.service.language;
  }
}
