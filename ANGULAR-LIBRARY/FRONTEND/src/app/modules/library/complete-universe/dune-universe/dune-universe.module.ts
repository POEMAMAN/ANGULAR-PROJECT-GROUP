import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DuneUniverseRoutingModule } from './dune-universe-routing.module';
import { BooksComponent } from '../../books/components/books/books.component';
// import { DuneBooksComponent } from './books/components/books/books.component';
// import { DuneCharactersComponent } from './dune-characters/dune-characters.component';
// import { DuneCountriesComponent } from './dune-countries/dune-countries.component';
// import { DunePlanetsComponent } from './dune-planets/dune-planets.component';


@NgModule({
  declarations: [
    // DuneBooksComponent,
    // DuneCharactersComponent,
    // DuneCountriesComponent,
    // DunePlanetsComponent,
    BooksComponent
  ],
  imports: [
    CommonModule,
    DuneUniverseRoutingModule
  ]
})
export class DuneUniverseModule { }
