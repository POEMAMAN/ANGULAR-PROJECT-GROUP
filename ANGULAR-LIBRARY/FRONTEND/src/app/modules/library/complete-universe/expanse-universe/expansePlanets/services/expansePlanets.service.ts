
import { ExpansePlanet } from '../interfaces/ExpansePlanets.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class expansePlanetsService {

  

  constructor(private http: HttpClient) { }

  getExpansePlanets(){
      return this.http.get<ExpansePlanet[]>('http://localhost:8084/universes/expanse/planets')
  }
}
