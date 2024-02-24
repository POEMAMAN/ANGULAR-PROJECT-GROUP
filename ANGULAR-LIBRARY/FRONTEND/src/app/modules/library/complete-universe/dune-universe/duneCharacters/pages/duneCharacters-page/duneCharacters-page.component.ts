import { DuneCharacter } from '../../interfaces/DuneCharacters.interface';
import { duneCharactersService } from '../../services/duneCharacters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duneCharacters-page',
  templateUrl: './duneCharacters-page.component.html',
  styleUrls: ['./duneCharacters-page.component.css']
})
export class duneCharactersPageComponent implements OnInit {
  duneCharacters: DuneCharacter[] = []
  constructor(private duneCharactersService: duneCharactersService ) {}


  ngOnInit(){
    this.duneCharactersService.getDuneCharacters().subscribe({
      next: (duneCharacters: DuneCharacter[]) => {
        this.duneCharacters = duneCharacters
      },
      error: () => {}
    })
  }

}
