
import { SeafordCharacter } from '../interfaces/seafordCharacters.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class seafordCharactersService {

  

  constructor(private http: HttpClient) { }

  getSeafordCharacters(){
      return this.http.get<SeafordCharacter[]>('http://localhost:8084/universes/seaford/characters')
  }
}
