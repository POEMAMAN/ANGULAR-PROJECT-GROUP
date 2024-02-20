
import { authors_URL} from '../../../../../../enviroment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from '../authors-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  authors_URL: string = authors_URL

  constructor(private http: HttpClient) {}

  getAuthors(){
    return this.http.get<Author[]>('http://localhost:8084/api/authors')
  }

}


