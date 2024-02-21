
import { FundacionBook } from '../interfaces/FundacionBooks.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class fundacionBooksService {

  

  constructor(private http: HttpClient) { }

  getFundacionBooks(){
      return this.http.get<FundacionBook[]>('http://localhost:8084/universes/fundacion/books')
  }
}
