import { UltraW40KCharactersService } from './../../services/UltraW40KCharacters.service';
import { UltraW40KCharacter } from '../../interfaces/UltraW40KCharacters.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-UltraW40KCharacters-page',
  templateUrl: './UltraW40KCharacters-page.component.html',
  styleUrls: ['./UltraW40KCharacters-page.component.scss']
})
export class UltraW40KCharactersPageComponent implements OnInit {
  UltraW40KCharacters: UltraW40KCharacter[] = []
  constructor(private UltraW40KCharactersService: UltraW40KCharactersService ) {}


  ngOnInit(){
    this.UltraW40KCharactersService.getUltraW40KCharacters().subscribe({
      next: (UltraW40KCharacters: UltraW40KCharacter[]) => {
        this.UltraW40KCharacters = UltraW40KCharacters
      },
      error: () => {}
    })
  }

}
