
import { SeafordCountrie } from '../interfaces/SeafordCountries.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SeafordCountriesService {

  

  constructor(private http: HttpClient) { }

  getSeafordCountries(){
      return this.http.get<SeafordCountrie[]>('http://localhost:8084/universes/seaford/countries')
  }
}
