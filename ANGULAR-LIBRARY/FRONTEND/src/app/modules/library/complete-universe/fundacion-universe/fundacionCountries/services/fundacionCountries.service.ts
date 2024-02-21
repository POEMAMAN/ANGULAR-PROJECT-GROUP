
import { FundacionCountrie } from '../interfaces/FundacionCountries.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class fundacionCountriesService {

  

  constructor(private http: HttpClient) { }

  getFundacionCountries(){
      return this.http.get<FundacionCountrie[]>('http://localhost:8084/universes/fundacion/countries')
  }
}
