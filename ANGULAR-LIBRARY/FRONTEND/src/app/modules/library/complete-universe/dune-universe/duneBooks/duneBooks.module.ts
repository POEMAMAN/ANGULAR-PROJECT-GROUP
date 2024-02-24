import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { duneBooksRoutingModule } from './duneBooks-routing.module';
import { duneBooksPageComponent } from './pages/duneBooks-page/duneBooks-page.component';
import { duneBooksComponent } from './components/duneBooks/duneBooks.component';


@NgModule({
  declarations: [
    duneBooksPageComponent,
    duneBooksComponent
  ],
  imports: [
    CommonModule,
    duneBooksRoutingModule
  ]
})
export class duneBooksModule { }
