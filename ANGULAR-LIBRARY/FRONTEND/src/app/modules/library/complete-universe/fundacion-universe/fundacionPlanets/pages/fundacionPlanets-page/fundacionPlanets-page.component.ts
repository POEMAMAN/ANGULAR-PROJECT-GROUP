import { FundacionPlanet } from '../../interfaces/FundacionPlanets.interface';
import { fundacionPlanetsService } from '../../services/fundacionPlanets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundacionPlanets-page',
  templateUrl: './fundacionPlanets-page.component.html',
  styleUrls: ['./fundacionPlanets-page.component.scss']
})
export class fundacionPlanetsPageComponent implements OnInit {
  fundacionPlanets: FundacionPlanet[] = []
  constructor(private fundacionPlanetService: fundacionPlanetsService ) {}


  ngOnInit(){
    this.fundacionPlanetService.getFundacionPlanets().subscribe({
      next: (fundacionPlanets: FundacionPlanet[]) => {
        this.fundacionPlanets = fundacionPlanets
      },
      error: () => {}
    })
  }

}
