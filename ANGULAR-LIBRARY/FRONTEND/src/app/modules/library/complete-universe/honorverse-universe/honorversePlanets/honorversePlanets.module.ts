import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { honorversePlanetsRoutingModule } from './honorversePlanets-routing.module';
import { honorversePlanetsComponent } from './components/honorversePlanets/honorversePlanets.component';
import { honorversePlanetsPageComponent } from './pages/honorversePlanets-page/honorversePlanets-page.component';


@NgModule({
  declarations: [
    honorversePlanetsPageComponent,
    honorversePlanetsComponent
  ],
  imports: [
    CommonModule,
    honorversePlanetsRoutingModule
  ]
})
export class honorversePlanetsModule { }
