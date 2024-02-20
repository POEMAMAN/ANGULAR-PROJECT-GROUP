import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Award } from '../interfaces/Awards.interface';

@Injectable({
  providedIn: 'root'
})
export class AwardsService {

  constructor(private http: HttpClient) { }

  getAwards(){
      return this.http.get<Award[]>('http://localhost:8084/api/awards')
  }
}
