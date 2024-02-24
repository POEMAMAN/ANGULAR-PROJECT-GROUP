
import { ExpanseCharacter } from '../interfaces/ExpanseCharacters.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class expanseCharactersService {

  

  constructor(private http: HttpClient) { }

  getExpanseCharacters(){
      return this.http.get<ExpanseCharacter[]>('http://localhost:8084/universes/expanse/characters')
  }
}
