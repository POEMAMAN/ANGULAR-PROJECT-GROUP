
import { HonorverseCountrie } from '../interfaces/HonorverseCountries.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class honorverseCountriesService {

  

  constructor(private http: HttpClient) { }

  getHonorverseCountries(){
      return this.http.get<HonorverseCountrie[]>('http://localhost:8084/universes/honorverse/countries')
  }
}
