import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalacticCenterUniverseRoutingModule } from './galactic-center-universe-routing.module';
import { GalacticCenterBooksComponent } from '../galactic-center-universe/galactic-center-books/galactic-center-books.component';
import { GalacticCenterCharactersComponent } from '../galactic-center-universe/galactic-center-characters/galactic-center-characters.component';
import { GalacticCenterCountriesComponent } from '../galactic-center-universe/galactic-center-countries/galactic-center-countries.component';
import { GalacticCenterPlanetsComponent } from '../galactic-center-universe/galactic-center-planets/galactic-center-planets.component';


@NgModule({
  declarations: [
    GalacticCenterBooksComponent,
    GalacticCenterCharactersComponent,
    GalacticCenterCountriesComponent,
    GalacticCenterPlanetsComponent
  ],
  imports: [
    CommonModule,
    GalacticCenterUniverseRoutingModule
  ]
})
export class GalacticCenterUniverseModule { }
