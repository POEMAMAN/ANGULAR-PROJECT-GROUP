
import { ForEverWarCharacter } from '../interfaces/ForEverWarCharacters.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class forEverWarCharactersService {

  

  constructor(private http: HttpClient) { }

  getForEverWarCharacters(){
      return this.http.get<ForEverWarCharacter[]>('http://localhost:8084/universes/forEverWar/characters')
  }
}
