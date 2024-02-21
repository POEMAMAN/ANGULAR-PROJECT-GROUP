import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { expanseCountriesRoutingModule } from './expanseCountries-routing.module';
import { expanseCountriesPageComponent } from './pages/expanseCountries-page/expanseCountries-page.component';
import { expanseCountriesComponent } from './components/expanseCountries/expanseCountries.component';


@NgModule({
  declarations: [
    expanseCountriesPageComponent,
    expanseCountriesComponent
  ],
  imports: [
    CommonModule,
    expanseCountriesRoutingModule
  ]
})
export class expanseCountriesModule { }
