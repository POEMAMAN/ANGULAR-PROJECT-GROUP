
import { ForEverWarPlanet } from '../interfaces/ForEverWarPlanets.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class forEverWarPlanetsService {

  

  constructor(private http: HttpClient) { }

  getForEverWarPlanets(){
      return this.http.get<ForEverWarPlanet[]>('http://localhost:8084/universes/forEverWar/planets')
  }
}
