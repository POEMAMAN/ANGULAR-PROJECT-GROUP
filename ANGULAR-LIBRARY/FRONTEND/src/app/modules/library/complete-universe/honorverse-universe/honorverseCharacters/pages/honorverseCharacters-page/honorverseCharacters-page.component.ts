import { HonorverseCharacter } from '../../interfaces/HonorverseCharacters.interface';
import { honorverseCharactersService } from '../../services/honorverseCharacters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-honorverseCharacters-page',
  templateUrl: './honorverseCharacters-page.component.html',
  styleUrls: ['./honorverseCharacters-page.component.css']
})
export class honorverseCharactersPageComponent implements OnInit {
  honorverseCharacters: HonorverseCharacter[] = []
  constructor(private honorverseCharactersService: honorverseCharactersService ) {}


  ngOnInit(){
    this.honorverseCharactersService.getHonorverseCharacters().subscribe({
      next: (honorverseCharacters: HonorverseCharacter[]) => {
        this.honorverseCharacters = honorverseCharacters
      },
      error: () => {}
    })
  }

}
