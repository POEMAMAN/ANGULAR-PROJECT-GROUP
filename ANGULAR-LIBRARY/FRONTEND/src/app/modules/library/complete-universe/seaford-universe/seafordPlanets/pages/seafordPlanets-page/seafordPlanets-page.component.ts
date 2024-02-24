import { SeafordPlanet } from '../../interfaces/SeafordPlanets.interface';
import { seafordPlanetsService } from '../../services/seafordPlanets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seafordPlanets-page',
  templateUrl: './seafordPlanets-page.component.html',
  styleUrls: ['./seafordPlanets-page.component.scss']
})
export class seafordPlanetsPageComponent implements OnInit {
  seafordPlanets: SeafordPlanet[] = []
  constructor(private seafordPlanetService: seafordPlanetsService ) {}


  ngOnInit(){
    this.seafordPlanetService.getseafordPlanets().subscribe({
      next: (seafordPlanets: SeafordPlanet[]) => {
        this.seafordPlanets = seafordPlanets
      },
      error: () => {}
    })
  }

}
