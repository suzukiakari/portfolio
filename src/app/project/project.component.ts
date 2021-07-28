import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MycheckService } from '../mycheck.service';



@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  message:string[];

  constructor(private client: HttpClient, private service:MycheckService) { }

  ngOnInit() {}

  //プロジェクト一覧のJSONデータを取得するメソッド
  getList() {
    //サービスからプロジェクト一覧のJSONデータを取得
    return this.service.project;
  }

}
