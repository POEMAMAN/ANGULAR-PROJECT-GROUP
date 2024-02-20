
import { Author } from './../interfaces/Authors.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  

  constructor(private http: HttpClient) { }

  getAuthors(){
      return this.http.get<Author[]>('http://localhost:8084/authors')
  }
}
