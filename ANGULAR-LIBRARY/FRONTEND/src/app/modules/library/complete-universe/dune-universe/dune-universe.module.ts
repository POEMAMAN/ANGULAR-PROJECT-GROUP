import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DuneUniverseRoutingModule } from './dune-universe-routing.module';
import { DuneUniverseComponent } from './dune-universe.component';
// import { DuneBooksComponent } from './books/components/books/books.component';
// import { DuneCharactersComponent } from './dune-characters/dune-characters.component';
// import { DuneCountriesComponent } from './dune-countries/dune-countries.component';
// import { DunePlanetsComponent } from './dune-planets/dune-planets.component';


@NgModule({
  declarations: [
    DuneUniverseComponent


  ],
  imports: [
    CommonModule,
    DuneUniverseRoutingModule
  ]
})
export class DuneUniverseModule { }
