import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeafordUniverseRoutingModule } from './seaford-universe-routing.module';
import { seafordBooksModule } from './seafordBooks/seafordBooks.module';
import { seafordCharactersModule } from './seafordCharacters/seafordCharacters.module';
import { seafordCountriesModule } from './seafordCountries/seafordCountries.module';
import { seafordPlanetsModule } from './seafordPlanets/seafordPlanets.module';
import { SeafordUniverseComponent } from './seaford-universe.component';



@NgModule({
  declarations: [
    SeafordUniverseComponent

  ],
  imports: [
    CommonModule,
    SeafordUniverseRoutingModule,
    seafordBooksModule,
    seafordCharactersModule,
    seafordCountriesModule,
    seafordPlanetsModule
  ]
})
export class SeafordUniverseModule { }
