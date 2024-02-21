
import { HonorverseCharacter } from '../interfaces/HonorverseCharacters.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class honorverseCharactersService {

  

  constructor(private http: HttpClient) { }

  getHonorverseCharacters(){
      return this.http.get<HonorverseCharacter[]>('http://localhost:8084/universes/honorverse/characters')
  }
}
