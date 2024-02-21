
import { UpliftBook } from '../interfaces/UpliftBooks.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UpliftBooksService {

  

  constructor(private http: HttpClient) { }

  getUpliftBooks(){
      return this.http.get<UpliftBook[]>('http://localhost:8084/universes/uplift/books')
  }
}
