
import { GauntW40KPlanet } from '../interfaces/GauntW40KPlanets.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class gauntW40KPlanetsService {

  

  constructor(private http: HttpClient) { }

  getGauntW40KPlanets(){
      return this.http.get<GauntW40KPlanet[]>('http://localhost:8084/universes/gauntW40K/planets')
  }
}
