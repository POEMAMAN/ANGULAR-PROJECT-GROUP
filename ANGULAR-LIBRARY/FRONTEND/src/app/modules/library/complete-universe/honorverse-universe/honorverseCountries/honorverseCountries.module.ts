import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { honorverseCountriesRoutingModule } from './honorverseCountries-routing.module';
import { honorverseCountriesPageComponent } from './pages/honorverseCountries-page/honorverseCountries-page.component';
import { honorverseCountriesComponent } from './components/honorverseCountries/honorverseCountries.component';


@NgModule({
  declarations: [
    honorverseCountriesPageComponent,
    honorverseCountriesComponent
  ],
  imports: [
    CommonModule,
    honorverseCountriesRoutingModule
  ]
})
export class honorverseCountriesModule { }
