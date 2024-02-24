import { GauntW40KPlanet } from '../../interfaces/GauntW40KPlanets.interface';
import { gauntW40KPlanetsService } from '../../services/gauntW40KPlanets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauntW40KPlanets-page',
  templateUrl: './gauntW40KPlanets-page.component.html',
  styleUrls: ['./gauntW40KPlanets-page.component.scss']
})
export class gauntW40KPlanetsPageComponent implements OnInit {
  gauntW40KPlanets: GauntW40KPlanet[] = []
  constructor(private gauntW40KPlanetService: gauntW40KPlanetsService ) {}


  ngOnInit(){
    this.gauntW40KPlanetService.getGauntW40KPlanets().subscribe({
      next: (gauntW40KPlanets: GauntW40KPlanet[]) => {
        this.gauntW40KPlanets = gauntW40KPlanets
      },
      error: () => {}
    })
  }

}
