import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OldManWarUniverseRoutingModule } from './old-man-war-universe-routing.module';
// import { OldManWarBooksComponent } from './old-man-war-books/old-man-war-books.component';
// import { OldManWarCharactersComponent } from './old-man-war-characters/old-man-war-characters.component';
// import { OldManWarCountriesComponent } from './old-man-war-countries/old-man-war-countries.component';
// import { OldManWarPlanetsComponent } from './old-man-war-planets/old-man-war-planets.component';


@NgModule({
  declarations: [
    // OldManWarBooksComponent,
    // OldManWarCharactersComponent,
    // OldManWarCountriesComponent,
    // OldManWarPlanetsComponent
  ],
  imports: [
    CommonModule,
    OldManWarUniverseRoutingModule
  ]
})
export class OldManWarUniverseModule { }
