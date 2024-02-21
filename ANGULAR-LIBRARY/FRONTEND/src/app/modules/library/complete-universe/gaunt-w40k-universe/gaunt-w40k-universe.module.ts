import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GauntW40KUniverseRoutingModule } from './gaunt-w40k-universe-routing.module';
import { GauntW40KUniverseComponent } from './gaunt-w40k-universe.component';
import { gauntW40KBooksModule } from './gauntW40KBooks/gauntW40KBooks.module';
import { gauntW40KCharactersModule } from './gauntW40KCharacters/gauntW40KCharacters.module';
import { gauntW40KCountriesModule } from './gauntW40KCountries/gauntW40KCountries.module';
import { gauntW40KPlanetsModule } from './gauntW40KPlanets/gauntW40KPlanets.module';



@NgModule({
  declarations: [
    GauntW40KUniverseComponent

  ],
  imports: [
    CommonModule,
    GauntW40KUniverseRoutingModule,
    gauntW40KBooksModule,
    gauntW40KCharactersModule,
    gauntW40KCountriesModule,
    gauntW40KPlanetsModule

  ]
})
export class GauntW40KUniverseModule { }
