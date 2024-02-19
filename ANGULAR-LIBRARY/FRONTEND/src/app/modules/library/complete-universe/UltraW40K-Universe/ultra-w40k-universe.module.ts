import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UltraW40KUniverseRoutingModule } from './ultra-w40k-universe-routing.module';
import { UltraW40KBooksComponent } from './ultra-w40k-books/ultra-w40k-books.component';
import { UltraW40KCharactersComponent } from './ultra-w40k-characters/ultra-w40k-characters.component';
import { UltraW40KCountriesComponent } from './ultra-w40k-countries/ultra-w40k-countries.component';
import { UltraW40KPlanetsComponent } from './ultra-w40k-planets/ultra-w40k-planets.component';


@NgModule({
  declarations: [
    UltraW40KBooksComponent,
    UltraW40KCharactersComponent,
    UltraW40KCountriesComponent,
    UltraW40KPlanetsComponent
  ],
  imports: [
    CommonModule,
    UltraW40KUniverseRoutingModule
  ]
})
export class UltraW40KUniverseModule { }
