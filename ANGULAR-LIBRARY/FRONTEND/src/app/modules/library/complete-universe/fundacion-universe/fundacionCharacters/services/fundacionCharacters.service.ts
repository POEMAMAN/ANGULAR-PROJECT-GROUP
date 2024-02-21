
import { GauntW40KCharacter } from '../interfaces/GauntW40KCharacters.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class gauntW40KCharactersService {

  

  constructor(private http: HttpClient) { }

  getGauntW40KCharacters(){
      return this.http.get<GauntW40KCharacter[]>('http://localhost:8084/universes/gauntW40K/characters')
  }
}
