import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { oldManWarCountriesRoutingModule } from './oldManWarCountries-routing.module';
import { oldManWarCountriesPageComponent } from './pages/oldManWarCountries-page/oldManWarCountries-page.component';
import { oldManWarCountriesComponent } from './components/oldManWarCountries/oldManWarCountries.component';


@NgModule({
  declarations: [
    oldManWarCountriesPageComponent,
    oldManWarCountriesComponent
  ],
  imports: [
    CommonModule,
    oldManWarCountriesRoutingModule
  ]
})
export class oldManWarCountriesModule { }
