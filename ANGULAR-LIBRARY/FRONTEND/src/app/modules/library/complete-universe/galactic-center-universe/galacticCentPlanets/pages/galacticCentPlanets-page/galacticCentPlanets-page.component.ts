import { GalacticCentPlanet } from '../../interfaces/GalacticCentPlanets.interface';
import { galacticCentPlanetsService } from '../../services/galacticCentPlanets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galacticCentPlanets-page',
  templateUrl: './galacticCentPlanets-page.component.html',
  styleUrls: ['./galacticCentPlanets-page.component.css']
})
export class galacticCentPlanetsPageComponent implements OnInit {
  galacticCentPlanets: GalacticCentPlanet[] = []
  constructor(private galacticCentPlanetService: galacticCentPlanetsService ) {}


  ngOnInit(){
    this.galacticCentPlanetService.getGalacticCentPlanets().subscribe({
      next: (galacticCentPlanets: GalacticCentPlanet[]) => {
        this.galacticCentPlanets = galacticCentPlanets
      },
      error: () => {}
    })
  }

}
