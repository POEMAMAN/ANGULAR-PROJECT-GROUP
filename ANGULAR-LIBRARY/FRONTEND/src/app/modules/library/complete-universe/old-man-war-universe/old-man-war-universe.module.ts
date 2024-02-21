import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OldManWarUniverseRoutingModule } from './old-man-war-universe-routing.module';
import { oldManWarBooksModule } from './oldManWarBooks/oldManWarBooks.module';
import { oldManWarCharactersModule } from './oldManWarCharacters/oldManWarCharacters.module';
import { oldManWarCountriesModule } from './oldManWarCountries/oldManWarCountries.module';
import { oldManWarPlanetsModule } from './oldManWarPlanets/oldManWarPlanets.module';
import { OldManWarUniverseComponent } from './old-man-war-universe.component';



@NgModule({
  declarations: [
    OldManWarUniverseComponent
 
  ],
  imports: [
    CommonModule,
    OldManWarUniverseRoutingModule,
    oldManWarBooksModule,
    oldManWarCharactersModule,
    oldManWarCountriesModule,
    oldManWarPlanetsModule
  ]
})
export class OldManWarUniverseModule { }
