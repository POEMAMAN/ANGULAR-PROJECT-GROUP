import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { galacticCentBooksRoutingModule } from './galacticCentBooks-routing.module';
import { galacticCentBooksPageComponent } from './pages/galacticCentBooks-page/galacticCentBooks-page.component';
import { galacticCentBooksComponent } from './components/galacticCentBooks/galacticCentBooks.component';


@NgModule({
  declarations: [
    galacticCentBooksPageComponent,
    galacticCentBooksComponent
  ],
  imports: [
    CommonModule,
    galacticCentBooksRoutingModule
  ]
})
export class galacticCentBooksModule { }
