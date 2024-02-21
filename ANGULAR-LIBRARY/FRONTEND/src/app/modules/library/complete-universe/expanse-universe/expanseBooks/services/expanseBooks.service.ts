
import { ExpanseBook } from '../interfaces/ExpanseBooks.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class expanseBooksService {

  

  constructor(private http: HttpClient) { }

  getExpanseBooks(){
      return this.http.get<ExpanseBook[]>('http://localhost:8084/universes/expanse/books')
  }
}
