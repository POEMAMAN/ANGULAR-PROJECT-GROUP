import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundacionUniverseRoutingModule } from './fundacion-universe-routing.module';
import { FundacionBooksComponent } from './fundacion-books/fundacion-books.component';
import { FundacionCharactersComponent } from './fundacion-characters/fundacion-characters.component';
import { FundacionCountriesComponent } from './fundacion-countries/fundacion-countries.component';
import { FundacionPlanetsComponent } from './fundacion-planets/fundacion-planets.component';


@NgModule({
  declarations: [
    FundacionBooksComponent,
    FundacionCharactersComponent,
    FundacionCountriesComponent,
    FundacionPlanetsComponent
  ],
  imports: [
    CommonModule,
    FundacionUniverseRoutingModule
  ]
})
export class FundacionUniverseModule { }
