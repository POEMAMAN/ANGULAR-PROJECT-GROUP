import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { expanseBooksRoutingModule } from './expanseBooks-routing.module';
import { expanseBooksPageComponent } from './pages/expanseBooks-page/expanseBooks-page.component';
import { expanseBooksComponent } from './components/expanseBooks/expanseBooks.component';


@NgModule({
  declarations: [
    expanseBooksPageComponent,
    expanseBooksComponent
  ],
  imports: [
    CommonModule,
    expanseBooksRoutingModule
  ]
})
export class expanseBooksModule { }
