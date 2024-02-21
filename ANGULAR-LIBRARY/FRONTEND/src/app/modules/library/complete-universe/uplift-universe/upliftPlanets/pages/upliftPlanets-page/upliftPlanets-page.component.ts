import { UpliftPlanet } from '../../interfaces/UpliftPlanets.interface';
import { UpliftPlanetsService } from '../../services/upliftPlanets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upliftPlanets-page',
  templateUrl: './upliftPlanets-page.component.html',
  styleUrls: ['./upliftPlanets-page.component.css']
})
export class UpliftPlanetsPageComponent implements OnInit {
  upliftPlanets: UpliftPlanet[] = []
  constructor(private upliftPlanetService: UpliftPlanetsService ) {}


  ngOnInit(){
    this.upliftPlanetService.getUpliftPlanets().subscribe({
      next: (upliftPlanets: UpliftPlanet[]) => {
        this.upliftPlanets = upliftPlanets
      },
      error: () => {}
    })
  }

}
