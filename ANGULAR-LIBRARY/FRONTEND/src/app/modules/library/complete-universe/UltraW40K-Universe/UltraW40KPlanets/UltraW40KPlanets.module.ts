import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltraW40KPlanetsRoutingModule } from './UltraW40KPlanets-routing.module';
import { UltraW40KPlanetsComponent } from './components/UltraW40KPlanets/UltraW40KPlanets.component';
import { UltraW40KPlanetsPageComponent } from './pages/UltraW40KPlanets-page/UltraW40KPlanets-page.component';


@NgModule({
  declarations: [
    UltraW40KPlanetsPageComponent,
    UltraW40KPlanetsComponent
  ],
  imports: [
    CommonModule,
    UltraW40KPlanetsRoutingModule
  ]
})
export class UltraW40KPlanetsModule { }
