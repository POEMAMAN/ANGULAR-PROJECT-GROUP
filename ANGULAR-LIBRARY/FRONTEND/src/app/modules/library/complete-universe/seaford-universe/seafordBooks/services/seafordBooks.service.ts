
import { SeafordBook } from '../interfaces/seafordBooks.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class seafordBooksService {

  

  constructor(private http: HttpClient) { }

  getSeafordBooks(){
      return this.http.get<SeafordBook[]>('http://localhost:8084/universes/seaford/books')
  }
}
