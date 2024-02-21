import { UltraW40KPlanetsService } from './../../services/UltraW40KPlanets.service';
import { UltraW40KPlanet } from '../../interfaces/UltraW40KPlanets.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-UltraW40KPlanets-page',
  templateUrl: './UltraW40KPlanets-page.component.html',
  styleUrls: ['./UltraW40KPlanets-page.component.css']
})
export class UltraW40KPlanetsPageComponent implements OnInit {
  UltraW40KPlanets: UltraW40KPlanet[] = []
  constructor(private UltraW40KPlanetsService: UltraW40KPlanetsService ) {}


  ngOnInit(){
    this.UltraW40KPlanetsService.getUltraW40KPlanets().subscribe({
      next: (UltraW40KPlanets: UltraW40KPlanet[]) => {
        this.UltraW40KPlanets = UltraW40KPlanets
      },
      error: () => {}
    })
  }

}
