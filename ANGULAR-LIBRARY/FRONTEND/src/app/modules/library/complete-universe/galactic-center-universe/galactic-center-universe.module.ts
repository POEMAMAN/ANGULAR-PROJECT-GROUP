import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalacticCenterUniverseRoutingModule } from './galactic-center-universe-routing.module';
import { FundacionBooksComponent } from '../fundacion-universe/fundacion-books/fundacion-books.component';
import { FundacionCharactersComponent } from '../fundacion-universe/fundacion-characters/fundacion-characters.component';
import { FundacionCountriesComponent } from '../fundacion-universe/fundacion-countries/fundacion-countries.component';
import { FundacionPlanetsComponent } from '../fundacion-universe/fundacion-planets/fundacion-planets.component';


@NgModule({
  declarations: [
    FundacionBooksComponent,
    FundacionCharactersComponent,
    FundacionCountriesComponent,
    FundacionPlanetsComponent
  ],
  imports: [
    CommonModule,
    GalacticCenterUniverseRoutingModule
  ]
})
export class GalacticCenterUniverseModule { }
