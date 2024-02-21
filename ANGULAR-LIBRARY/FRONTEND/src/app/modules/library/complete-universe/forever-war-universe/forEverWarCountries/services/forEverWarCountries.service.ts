
import { ForEverWarCountrie } from '../interfaces/ForEverWarCountries.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class forEverWarCountriesService {

  

  constructor(private http: HttpClient) { }

  getForEverWarCountries(){
      return this.http.get<ForEverWarCountrie[]>('http://localhost:8084/universes/forEverWar/countries')
  }
}
