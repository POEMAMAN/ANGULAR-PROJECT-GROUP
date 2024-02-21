
import { SeafordPlanet } from '../interfaces/seafordPlanets.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class seafordPlanetsService {

  

  constructor(private http: HttpClient) { }

  getseafordPlanets(){
      return this.http.get<SeafordPlanet[]>('http://localhost:8084/universes/seaford/planets')
  }
}
