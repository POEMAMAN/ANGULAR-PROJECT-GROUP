import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DuneUniverseRoutingModule } from './dune-universe-routing.module';
import { DuneUniverseComponent } from './dune-universe.component';
import { duneBooksModule } from './duneBooks/duneBooks.module';
import { duneCharactersModule } from './duneCharacters/duneCharacters.module';
import { duneCountriesModule } from './duneCountries/duneCountries.module';
import { dunePlanetsModule } from './dunePlanets/dunePlanets.module';



@NgModule({
  declarations: [
    DuneUniverseComponent


  ],
  imports: [
    CommonModule,
    DuneUniverseRoutingModule,
    duneBooksModule,
    duneCharactersModule,
    duneCountriesModule,
    dunePlanetsModule
  ]
})
export class DuneUniverseModule { };
