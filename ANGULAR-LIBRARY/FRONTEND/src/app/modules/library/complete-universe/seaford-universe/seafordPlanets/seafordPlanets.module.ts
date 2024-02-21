import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { seafordPlanetsRoutingModule } from './seafordPlanets-routing.module';
import { seafordPlanetsComponent } from './components/seafordPlanets/seafordPlanets.component';
import { seafordPlanetsPageComponent } from './pages/seafordPlanets-page/seafordPlanets-page.component';


@NgModule({
  declarations: [
    seafordPlanetsPageComponent,
    seafordPlanetsComponent
  ],
  imports: [
    CommonModule,
    seafordPlanetsRoutingModule
  ]
})
export class seafordPlanetsModule { }
