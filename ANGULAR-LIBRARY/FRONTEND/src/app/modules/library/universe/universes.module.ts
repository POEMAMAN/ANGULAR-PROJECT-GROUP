import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversesRoutingModule } from './universes-routing.module';
import { UniversesComponent } from './components/universes/universes.component';
import { UniversesPageComponent } from './pages/universes-page/universes-page.component';



@NgModule({
  declarations: [
  UniversesComponent,
  UniversesPageComponent

  ],
  imports: [
    CommonModule,
    UniversesRoutingModule
  ]
})
export class UniversesModule { }
