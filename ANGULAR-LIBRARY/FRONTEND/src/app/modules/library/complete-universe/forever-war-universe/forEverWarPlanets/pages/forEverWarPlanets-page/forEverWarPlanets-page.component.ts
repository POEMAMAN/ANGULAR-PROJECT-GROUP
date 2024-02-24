import { ForEverWarPlanet } from '../../interfaces/ForEverWarPlanets.interface';
import { forEverWarPlanetsService } from '../../services/forEverWarPlanets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forEverWarPlanets-page',
  templateUrl: './forEverWarPlanets-page.component.html',
  styleUrls: ['./forEverWarPlanets-page.component.scss']
})
export class forEverWarPlanetsPageComponent implements OnInit {
  forEverWarPlanets: ForEverWarPlanet[] = []
  constructor(private forEverWarPlanetService: forEverWarPlanetsService ) {}


  ngOnInit(){
    this.forEverWarPlanetService.getForEverWarPlanets().subscribe({
      next: (forEverWarPlanets: ForEverWarPlanet[]) => {
        this.forEverWarPlanets = forEverWarPlanets
      },
      error: () => {}
    })
  }

}
