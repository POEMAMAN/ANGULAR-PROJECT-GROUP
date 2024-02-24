
import { GalacticCentPlanet } from '../interfaces/GalacticCentPlanets.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class galacticCentPlanetsService {

  

  constructor(private http: HttpClient) { }

  getGalacticCentPlanets(){
      return this.http.get<GalacticCentPlanet[]>('http://localhost:8084/universes/galacticCenter/planets')
  }
}
