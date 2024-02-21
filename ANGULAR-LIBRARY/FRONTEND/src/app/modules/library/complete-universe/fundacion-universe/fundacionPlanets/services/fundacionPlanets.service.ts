
import { FundacionPlanet } from '../interfaces/FundacionPlanets.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class fundacionPlanetsService {

  

  constructor(private http: HttpClient) { }

  getFundacionPlanets(){
      return this.http.get<FundacionPlanet[]>('http://localhost:8084/universes/fundacion/planets')
  }
}
