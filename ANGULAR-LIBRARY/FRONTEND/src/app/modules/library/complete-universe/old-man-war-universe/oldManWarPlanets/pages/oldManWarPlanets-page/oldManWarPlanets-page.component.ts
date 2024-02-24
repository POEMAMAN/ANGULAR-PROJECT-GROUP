import { OldManWarPlanet } from '../../interfaces/OldManWarPlanets.interface';

import { Component, OnInit } from '@angular/core';
import { oldManWarPlanetsService } from '../../services/oldManWarPlanets.service';

@Component({
  selector: 'app-oldManWarPlanets-page',
  templateUrl: './oldManWarPlanets-page.component.html',
  styleUrls: ['./oldManWarPlanets-page.component.scss']
})
export class oldManWarPlanetsPageComponent implements OnInit {
  oldManWarPlanets: OldManWarPlanet[] = []
  constructor(private oldManWarPlanetService: oldManWarPlanetsService ) {}


  ngOnInit(){
    this.oldManWarPlanetService.getOldManWarPlanets().subscribe({
      next: (oldManWarPlanets: OldManWarPlanet[]) => {
        this.oldManWarPlanets = oldManWarPlanets
      },
      error: () => {}
    })
  }

}
