import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpliftBooksRoutingModule } from './upliftBooks-routing.module';
import { UpliftBooksPageComponent } from './pages/upliftBooks-page/upliftBooks-page.component';
import { UpliftBooksComponent } from './components/upliftBooks/upliftBooks.component';


@NgModule({
  declarations: [
    UpliftBooksPageComponent,
    UpliftBooksComponent
  ],
  imports: [
    CommonModule,
    UpliftBooksRoutingModule
  ]
})
export class UpliftBooksModule { }
