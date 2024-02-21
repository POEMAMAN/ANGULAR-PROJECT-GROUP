
import { DuneCountrie } from '../interfaces/DuneCountries.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class duneCountriesService {

  

  constructor(private http: HttpClient) { }

  getDuneCountries(){
      return this.http.get<DuneCountrie[]>('http://localhost:8084/universes/dune/countries')
  }
}
