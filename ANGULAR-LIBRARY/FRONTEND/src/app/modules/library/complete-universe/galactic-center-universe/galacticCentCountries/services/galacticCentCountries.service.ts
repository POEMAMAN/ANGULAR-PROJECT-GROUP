
import { GauntW40KCountrie } from '../interfaces/GauntW40KCountries.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class gauntW40KCountriesService {

  

  constructor(private http: HttpClient) { }

  getGauntW40KCountries(){
      return this.http.get<GauntW40KCountrie[]>('http://localhost:8084/universes/gauntW40K/countries')
  }
}
