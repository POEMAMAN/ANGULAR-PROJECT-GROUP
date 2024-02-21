import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { oldManWarPlanetsRoutingModule } from './oldManWarPlanets-routing.module';
import { oldManWarPlanetsComponent } from './components/oldManWarPlanets/oldManWarPlanets.component';
import { oldManWarPlanetsPageComponent } from './pages/oldManWarPlanets-page/oldManWarPlanets-page.component';


@NgModule({
  declarations: [
    oldManWarPlanetsPageComponent,
    oldManWarPlanetsComponent
  ],
  imports: [
    CommonModule,
    oldManWarPlanetsRoutingModule
  ]
})
export class oldManWarPlanetsModule { }
