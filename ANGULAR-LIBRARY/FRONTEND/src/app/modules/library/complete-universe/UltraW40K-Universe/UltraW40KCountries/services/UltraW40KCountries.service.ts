
import { UltraW40KCountrie } from '../interfaces/UltraW40KCountries.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UltraW40KCountriesService {

  

  constructor(private http: HttpClient) { }

  getUltraW40KCountries(){
      return this.http.get<UltraW40KCountrie[]>('http://localhost:8084/universes/ultraW40K/countries')
  }
}
