import { ForEverWarCharacter } from '../../interfaces/ForEverWarCharacters.interface';
import { forEverWarCharactersService } from '../../services/forEverWarCharacters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forEverWarCharacters-page',
  templateUrl: './forEverWarCharacters-page.component.html',
  styleUrls: ['./forEverWarCharacters-page.component.scss']
})
export class forEverWarCharactersPageComponent implements OnInit {
  forEverWarCharacters: ForEverWarCharacter[] = []
  constructor(private forEverWarCharactersService: forEverWarCharactersService ) {}


  ngOnInit(){
    this.forEverWarCharactersService.getForEverWarCharacters().subscribe({
      next: (forEverWarCharacters: ForEverWarCharacter[]) => {
        this.forEverWarCharacters = forEverWarCharacters
      },
      error: () => {}
    })
  }

}
