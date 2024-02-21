import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { forEverWarPlanetsRoutingModule } from './forEverWarPlanets-routing.module';
import { forEverWarPlanetsComponent } from './components/forEverWarPlanets/forEverWarPlanets.component';
import { forEverWarPlanetsPageComponent } from './pages/forEverWarPlanets-page/forEverWarPlanets-page.component';


@NgModule({
  declarations: [
    forEverWarPlanetsPageComponent,
    forEverWarPlanetsComponent
  ],
  imports: [
    CommonModule,
    forEverWarPlanetsRoutingModule
  ]
})
export class forEverWarPlanetsModule { }
