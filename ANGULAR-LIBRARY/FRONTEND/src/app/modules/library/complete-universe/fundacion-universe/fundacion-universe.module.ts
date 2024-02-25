import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundacionUniverseRoutingModule } from './fundacion-universe-routing.module';
import { FundacionUniverseComponent } from './fundacion-universe.component';
import { fundacionBooksModule } from './fundacionBooks/fundacionBooks.module';
import { fundacionCharactersModule } from './fundacionCharacters/fundacionCharacters.module';
import { fundacionCountriesModule } from './fundacionCountries/fundacionCountries.module';
import { fundacionPlanetsModule } from './fundacionPlanets/fundacionPlanets.module';



@NgModule({
  declarations: [
    FundacionUniverseComponent

  ],
  imports: [
    CommonModule,
    FundacionUniverseRoutingModule,
    fundacionBooksModule,
    fundacionCharactersModule,
    fundacionCountriesModule,
    fundacionPlanetsModule
  ]
})
export class FundacionUniverseModule { };
