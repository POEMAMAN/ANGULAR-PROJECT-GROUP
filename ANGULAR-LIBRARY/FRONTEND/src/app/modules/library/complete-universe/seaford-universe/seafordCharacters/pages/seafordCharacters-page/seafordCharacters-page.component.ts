import { seafordCharactersService } from './../../services/seafordCharacters.service';
import { SeafordCharacter } from '../../interfaces/seafordCharacters.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seafordCharacters-page',
  templateUrl: './seafordCharacters-page.component.html',
  styleUrls: ['./seafordCharacters-page.component.css']
})
export class seafordCharactersPageComponent implements OnInit {
  seafordCharacters: SeafordCharacter[] = []
  constructor(private seafordCharactersService: seafordCharactersService ) {}


  ngOnInit(){
    this.seafordCharactersService.getSeafordCharacters().subscribe({
      next: (seafordCharacters: SeafordCharacter[]) => {
        this.seafordCharacters = seafordCharacters
      },
      error: () => {}
    })
  }

}
