
import { OldManWarCountrie } from '../interfaces/OldManWarCountries.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class oldManWarCountriesService {

  

  constructor(private http: HttpClient) { }

  getOldManWarCountries(){
      return this.http.get<OldManWarCountrie[]>('http://localhost:8084/universes/oldManWar/countries')
  }
}
