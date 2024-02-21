import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gauntW40KPlanetsRoutingModule } from './gauntW40KPlanets-routing.module';
import { gauntW40KPlanetsComponent } from './components/gauntW40KPlanets/gauntW40KPlanets.component';
import { gauntW40KPlanetsPageComponent } from './pages/gauntW40KPlanets-page/gauntW40KPlanets-page.component';


@NgModule({
  declarations: [
    gauntW40KPlanetsPageComponent,
    gauntW40KPlanetsComponent
  ],
  imports: [
    CommonModule,
    gauntW40KPlanetsRoutingModule
  ]
})
export class gauntW40KPlanetsModule { }
