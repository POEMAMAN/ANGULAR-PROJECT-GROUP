import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { galacticCentPlanetsRoutingModule } from './galacticCentPlanets-routing.module';
import { galacticCentPlanetsComponent } from './components/galacticCentPlanets/galacticCentPlanets.component';
import { galacticCentPlanetsPageComponent } from './pages/galacticCentPlanets-page/galacticCentPlanets-page.component';


@NgModule({
  declarations: [
    galacticCentPlanetsPageComponent,
    galacticCentPlanetsComponent
  ],
  imports: [
    CommonModule,
    galacticCentPlanetsRoutingModule
  ]
})
export class galacticCentPlanetsModule { }
