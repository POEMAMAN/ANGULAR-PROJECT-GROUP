import { GauntW40KCharacter } from '../../interfaces/GauntW40KCharacters.interface';
import { gauntW40KCharactersService } from '../../services/gauntW40KCharacters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauntW40KCharacters-page',
  templateUrl: './gauntW40KCharacters-page.component.html',
  styleUrls: ['./gauntW40KCharacters-page.component.scss']
})
export class gauntW40KCharactersPageComponent implements OnInit {
  gauntW40KCharacters: GauntW40KCharacter[] = []
  constructor(private gauntW40KCharactersService: gauntW40KCharactersService ) {}


  ngOnInit(){
    this.gauntW40KCharactersService.getGauntW40KCharacters().subscribe({
      next: (gauntW40KCharacters: GauntW40KCharacter[]) => {
        this.gauntW40KCharacters = gauntW40KCharacters
      },
      error: () => {}
    })
  }

}
