import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DuneBooksRoutingModule } from './duneBooks-routing.module';
import { DuneBooksPageComponent } from './pages/duneBooks-page/duneBooks-page.component';
import { DuneBooksComponent } from './components/duneBooks/duneBooks.component';



@NgModule({
  declarations: [
    DuneBooksPageComponent,
    DuneBooksComponent
  ],
  imports: [
    CommonModule,
    DuneBooksRoutingModule
  ]
})
export class DuneBooksModule { }
