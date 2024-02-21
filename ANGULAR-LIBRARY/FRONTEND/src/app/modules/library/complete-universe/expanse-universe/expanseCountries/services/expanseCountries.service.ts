
import { ExpanseCountrie } from '../interfaces/ExpanseCountries.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class expanseCountriesService {

  

  constructor(private http: HttpClient) { }

  getExpanseCountries(){
      return this.http.get<ExpanseCountrie[]>('http://localhost:8084/universes/expanse/countries')
  }
}
