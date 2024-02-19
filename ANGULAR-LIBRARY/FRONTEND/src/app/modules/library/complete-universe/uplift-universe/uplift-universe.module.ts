import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpliftUniverseRoutingModule } from './uplift-universe-routing.module';
import { UpliftBooksComponent } from './uplift-books/uplift-books.component';
import { UpliftCharactersComponent } from './uplift-characters/uplift-characters.component';
import { UpliftCountriesComponent } from './uplift-countries/uplift-countries.component';
import { UpliftPlanetsComponent } from './uplift-planets/uplift-planets.component';


@NgModule({
  declarations: [
    UpliftBooksComponent,
    UpliftCharactersComponent,
    UpliftCountriesComponent,
    UpliftPlanetsComponent
  ],
  imports: [
    CommonModule,
    UpliftUniverseRoutingModule
  ]
})
export class UpliftUniverseModule { }
