import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpanseUniverseRoutingModule } from './expanse-universe-routing.module';
import { ExpanseUniverseComponent } from './expanse-universe.component';
import { expanseBooksModule } from './expanseBooks/expanseBooks.module';
import { expanseCharactersModule } from './expanseCharacters/expanseCharacters.module';
import { expanseCountriesModule } from './expanseCountries/expanseCountries.module';
import { expansePlanetsModule } from './expansePlanets/expansePlanets.module';



@NgModule({
  declarations: [
    ExpanseUniverseComponent
  ],
  imports: [
    CommonModule,
    ExpanseUniverseRoutingModule,
    expanseBooksModule,
    expanseCharactersModule,
    expanseCountriesModule,
    expansePlanetsModule
  ]
})
export class ExpanseUniverseModule { }
