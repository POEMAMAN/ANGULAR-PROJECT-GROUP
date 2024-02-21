import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { galacticCentCountriesRoutingModule } from './galacticCentCountries-routing.module';
import { galacticCentCountriesPageComponent } from './pages/galacticCentCountries-page/galacticCentCountries-page.component';
import { galacticCentCountriesComponent } from './components/galacticCentCountries/galacticCentCountries.component';


@NgModule({
  declarations: [
    galacticCentCountriesPageComponent,
    galacticCentCountriesComponent
  ],
  imports: [
    CommonModule,
    galacticCentCountriesRoutingModule
  ]
})
export class galacticCentCountriesModule { }
