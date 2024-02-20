
import { Book } from './../interfaces/Books.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  

  constructor(private http: HttpClient) { }

  getBooks(){
      return this.http.get<Book[]>('http://localhost:8084/books')
  }
}
