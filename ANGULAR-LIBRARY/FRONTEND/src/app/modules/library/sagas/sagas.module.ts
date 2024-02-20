import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SagasRoutingModule } from './sagas-routing.module';
import { SagasPageComponent } from './pages/sagas-page/sagas-page.component';
import { SagasComponent } from './components/sagas/sagas.component';


@NgModule({
  declarations: [
  SagasComponent,
  SagasPageComponent
  ],
  imports: [
    CommonModule,
    SagasRoutingModule
  ]
})
export class SagasModule { }
