import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForeverWarUniverseRoutingModule } from './forever-war-universe-routing.module';
import { ForeverWarUniverseComponent } from './forever-war-universe.component';
import { forEverWarBooksModule } from './forEverWarBooks/forEverWarBooks.module';
import { forEverWarCharactersModule } from './forEverWarCharacters/forEverWarCharacters.module';
import { forEverWarCountriesModule } from './forEverWarCountries/forEverWarCountries.module';
import { forEverWarPlanetsModule } from './forEverWarPlanets/forEverWarPlanets.module';




@NgModule({
  declarations: [
    ForeverWarUniverseComponent
  ],
  imports: [
    CommonModule,
    ForeverWarUniverseRoutingModule,
    forEverWarBooksModule,
    forEverWarCharactersModule,
    forEverWarCountriesModule,
    forEverWarPlanetsModule
  ]
})
export class ForeverWarUniverseModule { }
