import { UpliftCharacter } from '../../interfaces/UpliftCharacters.interface';
import { UpliftCharactersService } from '../../services/upliftCharacters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upliftCharacters-page',
  templateUrl: './upliftCharacters-page.component.html',
  styleUrls: ['./upliftCharacters-page.component.scss']
})
export class UpliftCharactersPageComponent implements OnInit {
  upliftCharacters: UpliftCharacter[] = []
  constructor(private upliftCharactersService: UpliftCharactersService ) {}


  ngOnInit(){
    this.upliftCharactersService.getUpliftCharacters().subscribe({
      next: (upliftCharacters: UpliftCharacter[]) => {
        this.upliftCharacters = upliftCharacters
      },
      error: () => {}
    })
  }

}
