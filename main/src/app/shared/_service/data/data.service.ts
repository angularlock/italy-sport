import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private languageSource = new BehaviorSubject(sessionStorage.getItem('language'));
  currentLanguage = this.languageSource.asObservable();

  constructor() {}

  changeLanguage(language: string) {
    this.languageSource.next(language);
  }

  public getData(): Observable<string> {
    return this.currentLanguage;
  }

}
