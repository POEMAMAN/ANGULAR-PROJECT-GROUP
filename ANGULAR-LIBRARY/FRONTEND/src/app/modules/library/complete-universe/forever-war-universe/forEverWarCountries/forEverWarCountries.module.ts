import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { forEverWarCountriesRoutingModule } from './forEverWarCountries-routing.module';
import { forEverWarCountriesPageComponent } from './pages/forEverWarCountries-page/forEverWarCountries-page.component';
import { forEverWarCountriesComponent } from './components/forEverWarCountries/forEverWarCountries.component';


@NgModule({
  declarations: [
    forEverWarCountriesPageComponent,
    forEverWarCountriesComponent
  ],
  imports: [
    CommonModule,
    forEverWarCountriesRoutingModule
  ]
})
export class forEverWarCountriesModule { }
