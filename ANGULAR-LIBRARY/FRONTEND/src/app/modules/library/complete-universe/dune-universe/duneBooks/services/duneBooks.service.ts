
import { DuneBook } from '../interfaces/DuneBooks.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class duneBooksService {

  

  constructor(private http: HttpClient) { }

  getDuneBooks(){
      return this.http.get<DuneBook[]>('http://localhost:8084/universes/dune/books')
  }

}
