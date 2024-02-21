
import { HonorversePlanet } from '../interfaces/HonorversePlanets.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class honorversePlanetsService {

  

  constructor(private http: HttpClient) { }

  getHonorversePlanets(){
      return this.http.get<HonorversePlanet[]>('http://localhost:8084/universes/honorverse/planets')
  }
}
