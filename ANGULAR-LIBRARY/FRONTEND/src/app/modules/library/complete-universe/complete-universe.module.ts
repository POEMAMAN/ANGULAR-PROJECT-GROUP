import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompleteUniverseRoutingModule } from './complete-universe-routing.module';
import { BooksDuneComponent } from './dune-universe/books-dune/books-dune.component';
import { DuneCharactersComponent } from './dune-universe/dune-characters/dune-characters.component';
import { DuneCountriesComponent } from './dune-universe/dune-countries/dune-countries.component';
import { DunePlanetsComponent } from './dune-universe/dune-planets/dune-planets.component';


@NgModule({
  declarations: [
    BooksDuneComponent,
    DuneCharactersComponent,
    DuneCountriesComponent,
    DunePlanetsComponent
  ],
  imports: [
    CommonModule,
    CompleteUniverseRoutingModule
  ]
})
export class CompleteUniverseModule { }
