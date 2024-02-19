import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForeverWarUniverseRoutingModule } from './forever-war-universe-routing.module';
import { ForeverWarBooksComponent } from './forever-war-books/forever-war-books.component';
import { ForeverWarCharactersComponent } from './forever-war-characters/forever-war-characters.component';
import { ForeverWarCountriesComponent } from './forever-war-countries/forever-war-countries.component';
import { ForeverWarPlanetsComponent } from './forever-war-planets/forever-war-planets.component';



@NgModule({
  declarations: [
  ForeverWarBooksComponent,
  ForeverWarCharactersComponent,
  ForeverWarCountriesComponent,
  ForeverWarPlanetsComponent
  ],
  imports: [
    CommonModule,
    ForeverWarUniverseRoutingModule
  ]
})
export class ForeverWarUniverseModule { }
