import { OldManWarCharacter } from '../../interfaces/OldManWarCharacters.interface';
import { oldManWarCharactersService } from '../../services/oldManWarCharacters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oldManWarCharacters-page',
  templateUrl: './oldManWarCharacters-page.component.html',
  styleUrls: ['./oldManWarCharacters-page.component.css']
})
export class oldManWarCharactersPageComponent implements OnInit {
  oldManWarCharacters: OldManWarCharacter[] = []
  constructor(private oldManWarCharactersService: oldManWarCharactersService ) {}


  ngOnInit(){
    this.oldManWarCharactersService.getOldManWarCharacters().subscribe({
      next: (oldManWarCharacters: OldManWarCharacter[]) => {
        this.oldManWarCharacters = oldManWarCharacters
      },
      error: () => {}
    })
  }

}
