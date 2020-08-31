import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers.append('Content-Type', 'application/json');
  }

  getNews(language:string, page: string, size: string): Observable < Object > {
    return this.http.get('/api/getNews',
      {
        headers: this.headers,
        params: {
          'language': language,
          'page': page,
          'size': size
        }
      }
    );
  }
}


