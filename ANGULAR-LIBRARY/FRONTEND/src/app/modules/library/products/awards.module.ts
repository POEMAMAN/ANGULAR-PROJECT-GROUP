import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AwardsRoutingModule } from './awards-routing.module';
import { AwardsPageComponent } from './pages/awards-page/awards-page.component';
import { AwardsComponent } from './components/product/awards.component';


@NgModule({
  declarations: [
    AwardsPageComponent,
    AwardsComponent
  ],
  imports: [
    CommonModule,
    AwardsRoutingModule
  ]
})
export class AwardsModule { }
