
import { UltraW40KBook } from '../interfaces/UltraW40KBooks.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UltraW40KBooksService {

  

  constructor(private http: HttpClient) { }

  getUltraW40KBooks(){
      return this.http.get<UltraW40KBook[]>('http://localhost:8084/universes/ultraW40K/books')
  }
}
