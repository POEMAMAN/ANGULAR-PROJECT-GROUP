import { ExpanseCharacter } from '../../interfaces/ExpanseCharacters.interface';
import { expanseCharactersService } from '../../services/expanseCharacters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expanseCharacters-page',
  templateUrl: './expanseCharacters-page.component.html',
  styleUrls: ['./expanseCharacters-page.component.css']
})
export class expanseCharactersPageComponent implements OnInit {
  expanseCharacters: ExpanseCharacter[] = []
  constructor(private expanseCharactersService: expanseCharactersService ) {}


  ngOnInit(){
    this.expanseCharactersService.getExpanseCharacters().subscribe({
      next: (expanseCharacters: ExpanseCharacter[]) => {
        this.expanseCharacters = expanseCharacters
      },
      error: () => {}
    })
  }

}
