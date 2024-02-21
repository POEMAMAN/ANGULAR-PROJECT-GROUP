
import { UpliftCharacter } from '../interfaces/UpliftCharacters.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UpliftCharactersService {

  

  constructor(private http: HttpClient) { }

  getUpliftCharacters(){
      return this.http.get<UpliftCharacter[]>('http://localhost:8084/universes/uplift/characters')
  }
}
