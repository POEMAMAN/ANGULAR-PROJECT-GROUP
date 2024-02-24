
import { GalacticCentCountrie } from '../interfaces/GalacticCentCountries.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class galacticCentCountriesService {

  

  constructor(private http: HttpClient) { }

  getGalacticCentCountries(){
      return this.http.get<GalacticCentCountrie[]>('http://localhost:8084/universes/galacticCenter/countries')
  }
}
