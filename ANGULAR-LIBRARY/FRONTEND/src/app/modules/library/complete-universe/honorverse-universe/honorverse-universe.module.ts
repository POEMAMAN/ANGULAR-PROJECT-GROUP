import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HonorverseUniverseRoutingModule } from './honorverse-universe-routing.module';
import { HonorverseUniverseComponent } from './honorverse-universe.component';
import { honorverseBooksModule } from './honorverseBooks/honorverseBooks.module';
import { honorverseCharactersModule } from './honorverseCharacters/honorverseCharacters.module';
import { honorverseCountriesModule } from './honorverseCountries/honorverseCountries.module';
import { honorversePlanetsModule } from './honorversePlanets/honorversePlanets.module';



@NgModule({
  declarations: [
    HonorverseUniverseComponent

  ],
  imports: [
    CommonModule,
    HonorverseUniverseRoutingModule,
    honorverseBooksModule,
    honorverseCharactersModule,
    honorverseCountriesModule,
    honorversePlanetsModule
  ]
})
export class HonorverseUniverseModule { };
