
import { OldManWarPlanet } from '../interfaces/OldManWarPlanets.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class oldManWarPlanetsService {

  

  constructor(private http: HttpClient) { }

  getOldManWarPlanets(){
      return this.http.get<OldManWarPlanet[]>('http://localhost:8084/universes/oldManWar/planets')
  }
}
