import { GalacticCenterUniverseComponent } from './galactic-center-universe.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalacticCenterUniverseRoutingModule } from './galactic-center-universe-routing.module';
import { galacticCentBooksModule } from './galacticCentBooks/galacticCentrBooks.module';
import { galacticCentCharactersModule } from './galacticCentCharacters/galacticCentCharacters.module';
import { galacticCentCountriesModule } from './galacticCentCountries/galacticCentCountries.module';
import { galacticCentPlanetsModule } from './galacticCentPlanets/galacticCentPlanets.module';



@NgModule({
  declarations: [
    GalacticCenterUniverseComponent

  ],
  imports: [
    CommonModule,
    GalacticCenterUniverseRoutingModule,
    galacticCentBooksModule,
    galacticCentCharactersModule,
    galacticCentCountriesModule,
    galacticCentPlanetsModule
  ]
})
export class GalacticCenterUniverseModule { };
