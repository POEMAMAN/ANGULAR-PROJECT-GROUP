
import { GauntW40KBook } from '../interfaces/GauntW40KBooks.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class gauntW40KBooksService {

  

  constructor(private http: HttpClient) { }

  getGauntW40KBooks(){
      return this.http.get<GauntW40KBook[]>('http://localhost:8084/universes/gauntW40K/books')
  }
}
