import { Component, OnInit } from '@angular/core';

import {TranslateService} from "@ngx-translate/core";
import {DataService} from "../_service/data/data.service";


@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  language: string;

  constructor(private translate: TranslateService, private data: DataService) {
    sessionStorage.setItem("language","en");
  }

  ngOnInit() {
    sessionStorage.setItem("language","en");
    this.data.getData().subscribe(language => this.language = language);
  }

  useLanguage(language: string) {
    this.translate.use(language);
    sessionStorage.setItem("language",language);
    this.data.changeLanguage(language);
  }

  getLanguageFlag(): string {
    return this.translate.currentLang;
  }

}
