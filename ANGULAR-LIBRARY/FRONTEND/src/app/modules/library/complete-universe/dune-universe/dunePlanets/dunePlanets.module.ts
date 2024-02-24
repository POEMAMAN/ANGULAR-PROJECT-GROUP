import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dunePlanetsRoutingModule } from './dunePlanets-routing.module';
import { dunePlanetsComponent } from './components/dunePlanets/dunePlanets.component';
import { dunePlanetsPageComponent } from './pages/dunePlanets-page/dunePlanets-page.component';


@NgModule({
  declarations: [
    dunePlanetsPageComponent,
    dunePlanetsComponent
  ],
  imports: [
    CommonModule,
    dunePlanetsRoutingModule
  ]
})
export class dunePlanetsModule { }
