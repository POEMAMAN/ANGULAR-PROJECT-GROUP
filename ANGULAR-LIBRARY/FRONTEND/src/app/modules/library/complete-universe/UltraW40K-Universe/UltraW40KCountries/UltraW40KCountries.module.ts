import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UltraW40KCountriesRoutingModule } from './UltraW40KCountries-routing.module';
import { UltraW40KCountriesPageComponent } from './pages/UltraW40KCountries-page/UltraW40KCountries-page.component';
import { UltraW40KCountriesComponent } from './components/UltraW40KCountries/UltraW40KCountries.component';


@NgModule({
  declarations: [
    UltraW40KCountriesPageComponent,
    UltraW40KCountriesComponent
  ],
  imports: [
    CommonModule,
    UltraW40KCountriesRoutingModule
  ]
})
export class UltraW40KCountriesModule { }
