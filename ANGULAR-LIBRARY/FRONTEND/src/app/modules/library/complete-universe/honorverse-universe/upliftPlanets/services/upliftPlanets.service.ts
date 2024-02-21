
import { UpliftPlanet } from '../interfaces/UpliftPlanets.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UpliftPlanetsService {

  

  constructor(private http: HttpClient) { }

  getUpliftPlanets(){
      return this.http.get<UpliftPlanet[]>('http://localhost:8084/universes/uplift/planets')
  }
}
