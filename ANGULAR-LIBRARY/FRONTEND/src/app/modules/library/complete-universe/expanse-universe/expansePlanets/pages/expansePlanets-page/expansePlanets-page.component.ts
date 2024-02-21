import { ExpansePlanet } from '../../interfaces/ExpansePlanets.interface';
import { expansePlanetsService } from '../../services/expansePlanets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansePlanets-page',
  templateUrl: './expansePlanets-page.component.html',
  styleUrls: ['./expansePlanets-page.component.css']
})
export class expansePlanetsPageComponent implements OnInit {
  expansePlanets: ExpansePlanet[] = []
  constructor(private expansePlanetService: expansePlanetsService ) {}


  ngOnInit(){
    this.expansePlanetService.getExpansePlanets().subscribe({
      next: (expansePlanets: ExpansePlanet[]) => {
        this.expansePlanets = expansePlanets
      },
      error: () => {}
    })
  }

}
