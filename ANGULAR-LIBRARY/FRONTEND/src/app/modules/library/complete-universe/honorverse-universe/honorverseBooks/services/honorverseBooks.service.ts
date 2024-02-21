
import { HonorverseBook } from '../interfaces/HonorverseBooks.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class honorverseBooksService {

  

  constructor(private http: HttpClient) { }

  getHonorverseBooks(){
      return this.http.get<HonorverseBook[]>('http://localhost:8084/universes/honorverse/books')
  }
}
