import { FundacionCharacter } from '../../interfaces/FundacionCharacters.interface';
import { fundacionCharactersService } from '../../services/fundacionCharacters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundacionCharacters-page',
  templateUrl: './fundacionCharacters-page.component.html',
  styleUrls: ['./fundacionCharacters-page.component.css']
})
export class fundacionCharactersPageComponent implements OnInit {
  fundacionCharacters: FundacionCharacter[] = []
  constructor(private fundacionCharactersService: fundacionCharactersService ) {}


  ngOnInit(){
    this.fundacionCharactersService.getFundacionCharacters().subscribe({
      next: (fundacionCharacters: FundacionCharacter[]) => {
        this.fundacionCharacters = fundacionCharacters
      },
      error: () => {}
    })
  }

}
