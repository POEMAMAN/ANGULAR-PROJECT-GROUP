import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpliftCountriesRoutingModule } from './upliftCountries-routing.module';
import { UpliftCountriesPageComponent } from './pages/upliftCountries-page/upliftCountries-page.component';
import { UpliftCountriesComponent } from './components/upliftCountries/upliftCountries.component';


@NgModule({
  declarations: [
    UpliftCountriesPageComponent,
    UpliftCountriesComponent
  ],
  imports: [
    CommonModule,
    UpliftCountriesRoutingModule
  ]
})
export class UpliftCountriesModule { }
