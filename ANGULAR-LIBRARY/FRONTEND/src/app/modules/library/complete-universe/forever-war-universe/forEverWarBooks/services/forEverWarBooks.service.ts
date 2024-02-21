
import { ForEverWarBook } from '../interfaces/ForEverWarBooks.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class forEverWarBooksService {

  

  constructor(private http: HttpClient) { }

  getForEverWarBooks(){
      return this.http.get<ForEverWarBook[]>('http://localhost:8084/universes/forEverWar/books')
  }
}
