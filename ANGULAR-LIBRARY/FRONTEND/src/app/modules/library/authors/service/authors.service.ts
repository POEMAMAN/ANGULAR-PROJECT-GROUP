
import { authors_URL} from '../../../../../../enviroment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  authors_URL: string = authors_URL

  constructor(private http: HttpClient) {}

  getAuthors(){
    return this.http.get(`${this.authors_URL}/author`)
  }

}
