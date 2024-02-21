
import { UltraW40KCharacter } from '../interfaces/UltraW40KCharacters.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UltraW40KCharactersService {

  

  constructor(private http: HttpClient) { }

  getUltraW40KCharacters(){
      return this.http.get<UltraW40KCharacter[]>('http://localhost:8084/universes/ultraW40K/characters')
  }
}
