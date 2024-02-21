import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { gauntW40KCountriesRoutingModule } from './gauntW40KCountries-routing.module';
import { gauntW40KCountriesPageComponent } from './pages/gauntW40KCountries-page/gauntW40KCountries-page.component';
import { gauntW40KCountriesComponent } from './components/gauntW40KCountries/gauntW40KCountries.component';


@NgModule({
  declarations: [
    gauntW40KCountriesPageComponent,
    gauntW40KCountriesComponent
  ],
  imports: [
    CommonModule,
    gauntW40KCountriesRoutingModule
  ]
})
export class gauntW40KCountriesModule { }
