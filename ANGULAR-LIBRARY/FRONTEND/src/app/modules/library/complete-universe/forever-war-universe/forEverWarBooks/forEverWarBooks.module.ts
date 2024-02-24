import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { forEverWarBooksRoutingModule } from './forEverWarBooks-routing.module';
import { forEverWarBooksPageComponent } from './pages/forEverWarBooks-page/forEverWarBooks-page.component';
import { forEverWarBooksComponent } from './components/forEverWarBooks/forEverWarBooks.component';


@NgModule({
  declarations: [
    forEverWarBooksPageComponent,
    forEverWarBooksComponent
  ],
  imports: [
    CommonModule,
    forEverWarBooksRoutingModule
  ]
})
export class forEverWarBooksModule { }
