
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpliftUniverseRoutingModule } from './uplift-universe-routing.module';
import { UpliftBooksModule } from './upliftBooks/upliftBooks.module';
import { UpliftCharactersModule } from './upliftCharacters/upliftCharacters.module';
import { UpliftCountriesModule } from './upliftCountries/upliftCountries.module';
import { UpliftPlanetsModule } from './upliftPlanets/upliftPlanets.module';





@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    UpliftUniverseRoutingModule,
    UpliftBooksModule,
    UpliftCharactersModule,
    UpliftCountriesModule,
    UpliftPlanetsModule,

  ]
})
export class UpliftUniverseModule { }
