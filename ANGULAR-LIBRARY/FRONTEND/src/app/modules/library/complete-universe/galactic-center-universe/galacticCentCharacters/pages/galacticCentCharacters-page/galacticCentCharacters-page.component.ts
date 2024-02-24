import { GalacticCentCharacter } from '../../interfaces/GalacticCentCharacters.interface';
import { galacticCentCharactersService } from '../../services/galacticCentCharacters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galacticCentCharacters-page',
  templateUrl: './galacticCentCharacters-page.component.html',
  styleUrls: ['./galacticCentCharacters-page.component.scss']
})
export class galacticCentCharactersPageComponent implements OnInit {
  galacticCentCharacters: GalacticCentCharacter[] = []
  constructor(private galacticCentCharactersService: galacticCentCharactersService ) {}


  ngOnInit(){
    this.galacticCentCharactersService.getGalacticCentCharacters().subscribe({
      next: (galacticCentCharacters: GalacticCentCharacter[]) => {
        this.galacticCentCharacters = galacticCentCharacters
      },
      error: () => {}
    })
  }

}
