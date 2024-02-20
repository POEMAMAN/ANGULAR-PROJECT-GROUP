
import { Universe } from './../interfaces/Universes.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UniversesService {

  

  constructor(private http: HttpClient) { }

  getUniverses(){
      return this.http.get<Universe[]>('http://localhost:8084/universes')
  }
}
