import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UltraW40KUniverseRoutingModule } from './ultra-w40k-universe-routing.module';
import { UltraW40KBooksModule } from './UltraW40KBooks/UltraW40KBooks.module';
import { UltraW40KCharactersModule } from './UltraW40KCharacters/UltraW40KCharacters.module';
import { UltraW40KCountriesModule } from './UltraW40KCountries/UltraW40KCountries.module';
import { UltraW40KPlanetsModule } from './UltraW40KPlanets/UltraW40KPlanets.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    UltraW40KUniverseRoutingModule,
    UltraW40KBooksModule,
    UltraW40KCharactersModule,
    UltraW40KCountriesModule,
    UltraW40KPlanetsModule
  ]
})
export class UltraW40KUniverseModule { }
