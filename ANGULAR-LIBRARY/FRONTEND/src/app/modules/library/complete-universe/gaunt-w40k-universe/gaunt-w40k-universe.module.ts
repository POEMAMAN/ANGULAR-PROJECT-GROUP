import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GauntW40KUniverseRoutingModule } from './gaunt-w40k-universe-routing.module';
import { GauntW40KBooksComponent } from './gaunt-w40k-books/gaunt-w40k-books.component';
import { GauntW40KCharactersComponent } from './gaunt-w40k-characters/gaunt-w40k-characters.component';
import { GauntW40KCountriesComponent } from './gaunt-w40k-countries/gaunt-w40k-countries.component';
import { GauntW40KPlanetsComponent } from './gaunt-w40k-planets/gaunt-w40k-planets.component';


@NgModule({
  declarations: [
    GauntW40KBooksComponent,
    GauntW40KCharactersComponent,
    GauntW40KCountriesComponent,
    GauntW40KPlanetsComponent
  ],
  imports: [
    CommonModule,
    GauntW40KUniverseRoutingModule
  ]
})
export class GauntW40KUniverseModule { }
