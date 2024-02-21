import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpliftPlanetsRoutingModule } from './upliftPlanets-routing.module';
import { UpliftPlanetsComponent } from './components/upliftPlanets/upliftPlanets.component';
import { UpliftPlanetsPageComponent } from './pages/upliftPlanets-page/upliftPlanets-page.component';


@NgModule({
  declarations: [
    UpliftPlanetsPageComponent,
    UpliftPlanetsComponent
  ],
  imports: [
    CommonModule,
    UpliftPlanetsRoutingModule
  ]
})
export class UpliftPlanetsModule { }
