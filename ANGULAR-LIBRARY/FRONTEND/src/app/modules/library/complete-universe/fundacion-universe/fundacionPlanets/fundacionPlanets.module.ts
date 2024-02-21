import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fundacionPlanetsRoutingModule } from './fundacionPlanets-routing.module';
import { fundacionPlanetsComponent } from './components/fundacionPlanets/fundacionPlanets.component';
import { fundacionPlanetsPageComponent } from './pages/fundacionPlanets-page/fundacionPlanets-page.component';


@NgModule({
  declarations: [
    fundacionPlanetsPageComponent,
    fundacionPlanetsComponent
  ],
  imports: [
    CommonModule,
    fundacionPlanetsRoutingModule
  ]
})
export class fundacionPlanetsModule { }
