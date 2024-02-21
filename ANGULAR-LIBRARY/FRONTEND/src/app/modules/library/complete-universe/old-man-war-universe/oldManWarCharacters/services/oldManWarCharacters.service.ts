
import { OldManWarCharacter } from '../interfaces/OldManWarCharacters.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class oldManWarCharactersService {

  

  constructor(private http: HttpClient) { }

  getOldManWarCharacters(){
      return this.http.get<OldManWarCharacter[]>('http://localhost:8084/universes/oldManWar/characters')
  }
}
