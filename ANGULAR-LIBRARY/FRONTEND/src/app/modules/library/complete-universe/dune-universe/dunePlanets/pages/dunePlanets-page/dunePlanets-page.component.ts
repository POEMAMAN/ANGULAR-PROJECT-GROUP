import { DunePlanet } from '../../interfaces/DunePlanets.interface';
import { dunePlanetsService } from '../../services/dunePlanets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dunePlanets-page',
  templateUrl: './dunePlanets-page.component.html',
  styleUrls: ['./dunePlanets-page.component.css']
})
export class dunePlanetsPageComponent implements OnInit {
  dunePlanets: DunePlanet[] = []
  constructor(private dunePlanetService: dunePlanetsService ) {}


  ngOnInit(){
    this.dunePlanetService.getDunePlanets().subscribe({
      next: (dunePlanets: DunePlanet[]) => {
        this.dunePlanets = dunePlanets
      },
      error: () => {}
    })
  }

}
