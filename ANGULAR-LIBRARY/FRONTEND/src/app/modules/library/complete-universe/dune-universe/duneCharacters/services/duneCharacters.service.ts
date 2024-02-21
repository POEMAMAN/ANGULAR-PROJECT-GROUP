
import { DuneCharacter } from '../interfaces/DuneCharacters.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class duneCharactersService {

  

  constructor(private http: HttpClient) { }

  getDuneCharacters(){
      return this.http.get<DuneCharacter[]>('http://localhost:8084/universes/dune/characters')
  }
}
