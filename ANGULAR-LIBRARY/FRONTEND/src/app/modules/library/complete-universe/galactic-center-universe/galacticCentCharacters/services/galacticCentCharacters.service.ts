
import { GalacticCentCharacter } from '../interfaces/GalacticCentCharacters.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class galacticCentCharactersService {

  

  constructor(private http: HttpClient) { }

  getGalacticCentCharacters(){
      return this.http.get<GalacticCentCharacter[]>('http://localhost:8084/universes/galacticCenter/characters')
  }
}
