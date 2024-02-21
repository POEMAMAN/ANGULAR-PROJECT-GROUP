import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { seafordCountriesRoutingModule } from './seafordCountries-routing.module';
import { seafordCountriesPageComponent } from './pages/seafordCountries-page/seafordCountries-page.component';
import { seafordCountriesComponent } from './components/seafordCountries/seafordCountries.component';


@NgModule({
  declarations: [
    seafordCountriesPageComponent,
    seafordCountriesComponent
  ],
  imports: [
    CommonModule,
    seafordCountriesRoutingModule
  ]
})
export class seafordCountriesModule { }
