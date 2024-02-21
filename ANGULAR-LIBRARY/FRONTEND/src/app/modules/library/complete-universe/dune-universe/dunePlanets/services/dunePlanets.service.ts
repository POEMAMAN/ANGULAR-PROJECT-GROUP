
import { DunePlanet } from '../interfaces/DunePlanets.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class dunePlanetsService {

  

  constructor(private http: HttpClient) { }

  getDunePlanets(){
      return this.http.get<DunePlanet[]>('http://localhost:8084/universes/dune/planets')
  }
}
