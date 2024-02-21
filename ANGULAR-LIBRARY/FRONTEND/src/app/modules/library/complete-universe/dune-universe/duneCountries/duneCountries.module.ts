import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { duneCountriesRoutingModule } from './duneCountries-routing.module';
import { duneCountriesPageComponent } from './pages/duneCountries-page/duneCountries-page.component';
import { duneCountriesComponent } from './components/duneCountries/duneCountries.component';


@NgModule({
  declarations: [
    duneCountriesPageComponent,
    duneCountriesComponent
  ],
  imports: [
    CommonModule,
    duneCountriesRoutingModule
  ]
})
export class duneCountriesModule { }
