
import { FundacionCharacter } from '../interfaces/FundacionCharacters.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class fundacionCharactersService {

  

  constructor(private http: HttpClient) { }

  getFundacionCharacters(){
      return this.http.get<FundacionCharacter[]>('http://localhost:8084/universes/fundacion/characters')
  }
}
