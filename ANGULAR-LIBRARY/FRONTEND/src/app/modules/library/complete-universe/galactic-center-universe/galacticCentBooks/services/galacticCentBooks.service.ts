
import { GalacticCentBook } from '../interfaces/GalacticCentBooks.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class galacticCentBooksService {

  

  constructor(private http: HttpClient) { }

  getGalacticCentBooks(){
      return this.http.get<GalacticCentBook[]>('http://localhost:8084/universes/galacticCenter/books')
  }
}
