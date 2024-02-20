import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HonorverseUniverseRoutingModule } from './honorverse-universe-routing.module';
import { HonorverseBooksComponent } from './honorverse-books/honorverse-books.component';
import { HonorverseCharactersComponent } from './honorverse-characters/honorverse-characters.component';
import { HonorverseCountriesComponent } from './honorverse-countries/honorverse-countries.component';
import { HonorversePlanetsComponent } from './honorverse-planets/honorverse-planets.component';


@NgModule({
  declarations: [
    HonorverseBooksComponent,
    HonorverseCharactersComponent,
    HonorverseCountriesComponent,
    HonorversePlanetsComponent
  ],
  imports: [
    CommonModule,
    HonorverseUniverseRoutingModule
  ]
})
export class HonorverseUniverseModule { }
