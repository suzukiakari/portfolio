import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



//成果物リストを取得するためのクラス
class ProList {
  list:Project[] = [];
}

class Project {
  data:string;
  text:string;
  language:string;
  url:string;
}

//言語一覧表を取得するためのクラス
class LanList {
  list:Language[] = [];
}

class Language {
  name:string;
  icon:string;
  level:string;
  text:string;
}


@Injectable({
  providedIn: 'root'
})
export class MycheckService {
  private proList:ProList = new ProList();
  private lanList:LanList = new LanList();

  constructor(private client:HttpClient) {
    this.getProList();
    this.getLanList();
  }

  //成果物一覧ファイルにアクセス
  getProList() {
    this.client.get('/assets/prolist.json')
    .subscribe((result:ProList) => {
      this.proList = result;
    });
  }

  //言語一覧ファイルにアクセス
  getLanList() {
    this.client.get('/assets/lanlist.json')
    .subscribe((result:LanList) => {
      this.lanList = result;
    });
  }

  //成果物一覧データ取得
  get project() {
    return this.proList.list;
  }

  //成果物一覧データ取得
  get language() {
    return this.lanList.list;
  }
}
