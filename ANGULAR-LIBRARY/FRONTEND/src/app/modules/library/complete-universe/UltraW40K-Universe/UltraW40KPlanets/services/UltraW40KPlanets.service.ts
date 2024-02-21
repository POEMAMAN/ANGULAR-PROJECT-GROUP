
import { UltraW40KPlanet } from '../interfaces/UltraW40KPlanets.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UltraW40KPlanetsService {

  

  constructor(private http: HttpClient) { }

  getUltraW40KPlanets(){
      return this.http.get<UltraW40KPlanet[]>('http://localhost:8084/universes/ultraW40K/planets')
  }
}
