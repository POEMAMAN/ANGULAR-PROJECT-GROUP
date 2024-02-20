
import { Saga } from './../interfaces/Sagas.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SagasService {

  

  constructor(private http: HttpClient) { }

  getSagas(){
      return this.http.get<Saga[]>('http://localhost:8084/sagas')
  }
}
