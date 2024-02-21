
import { UpliftCountrie } from '../interfaces/UpliftCountries.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UpliftCountriesService {

  

  constructor(private http: HttpClient) { }

  getUpliftCountries(){
      return this.http.get<UpliftCountrie[]>('http://localhost:8084/universes/uplift/countries')
  }
}
