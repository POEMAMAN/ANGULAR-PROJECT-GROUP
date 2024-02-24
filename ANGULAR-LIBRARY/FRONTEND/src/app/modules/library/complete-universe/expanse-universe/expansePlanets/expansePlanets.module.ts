import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { expansePlanetsRoutingModule } from './expansePlanets-routing.module';
import { expansePlanetsComponent } from './components/expansePlanets/expansePlanets.component';
import { expansePlanetsPageComponent } from './pages/expansePlanets-page/expansePlanets-page.component';


@NgModule({
  declarations: [
    expansePlanetsPageComponent,
    expansePlanetsComponent
  ],
  imports: [
    CommonModule,
    expansePlanetsRoutingModule
  ]
})
export class expansePlanetsModule { }
