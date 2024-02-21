
import { OldManWarBook } from '../interfaces/OldManWarBooks.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class oldManWarBooksService {

  

  constructor(private http: HttpClient) { }

  getOldManWarBooks(){
      return this.http.get<OldManWarBook[]>('http://localhost:8084/universes/oldManWar/books')
  }
}
