import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpanseUniverseRoutingModule } from './expanse-universe-routing.module';
import { ExpanseBooksComponent } from './expanse-books/expanse-books.component';
import { ExpanseCharactersComponent } from './expanse-characters/expanse-characters.component';
import { ExpanseCountriesComponent } from './expanse-countries/expanse-countries.component';
import { ExpansePlanetsComponent } from './expanse-planets/expanse-planets.component';


@NgModule({
  declarations: [
    ExpanseBooksComponent,
    ExpanseCharactersComponent,
    ExpanseCountriesComponent,
    ExpansePlanetsComponent
  ],
  imports: [
    CommonModule,
    ExpanseUniverseRoutingModule
  ]
})
export class ExpanseUniverseModule { }
