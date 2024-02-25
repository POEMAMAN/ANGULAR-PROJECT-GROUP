import { HonorversePlanet } from '../../interfaces/HonorversePlanets.interface';
import { honorversePlanetsService } from '../../services/honorversePlanets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-honorversePlanets-page',
  templateUrl: './honorversePlanets-page.component.html',
  styleUrls: ['./honorversePlanets-page.component.scss']
})
export class honorversePlanetsPageComponent implements OnInit {
  honorversePlanets: HonorversePlanet[] = []
  constructor(private honorversePlanetService: honorversePlanetsService ) {}


  ngOnInit(){
    this.honorversePlanetService.getHonorversePlanets().subscribe({
      next: (honorversePlanets: HonorversePlanet[]) => {
        this.honorversePlanets = honorversePlanets
      },
      error: () => {}
    })
  }

}
