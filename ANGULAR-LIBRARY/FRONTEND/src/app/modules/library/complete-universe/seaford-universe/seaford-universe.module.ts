import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeafordUniverseRoutingModule } from './seaford-universe-routing.module';
import { SeafordBooksComponent } from './seaford-books/seaford-books.component';
import { SeafordCharactersComponent } from './seaford-characters/seaford-characters.component';
import { SeafordCountriesComponent } from './seaford-countries/seaford-countries.component';
import { SeafordPlanetsComponent } from './seaford-planets/seaford-planets.component';


@NgModule({
  declarations: [
    SeafordBooksComponent,
    SeafordCharactersComponent,
    SeafordCountriesComponent,
    SeafordPlanetsComponent
  ],
  imports: [
    CommonModule,
    SeafordUniverseRoutingModule
  ]
})
export class SeafordUniverseModule { }
