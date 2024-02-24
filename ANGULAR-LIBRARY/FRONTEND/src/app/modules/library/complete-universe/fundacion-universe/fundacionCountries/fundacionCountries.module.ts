import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { fundacionCountriesRoutingModule } from './fundacionCountries-routing.module';
import { fundacionCountriesPageComponent } from './pages/fundacionCountries-page/fundacionCountries-page.component';
import { fundacionCountriesComponent } from './components/fundacionCountries/fundacionCountries.component';


@NgModule({
  declarations: [
    fundacionCountriesPageComponent,
    fundacionCountriesComponent
  ],
  imports: [
    CommonModule,
    fundacionCountriesRoutingModule
  ]
})
export class fundacionCountriesModule { }
