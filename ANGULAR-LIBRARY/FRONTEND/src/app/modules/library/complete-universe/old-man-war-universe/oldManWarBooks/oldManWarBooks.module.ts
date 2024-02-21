import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { oldManWarBooksPageComponent } from './pages/oldManWarBooks-page/oldManWarBooks-page.component';
import { oldManWarBooksComponent } from './components/oldManWarBooks/oldManWarBooks.component';
import { oldManWarBooksRoutingModule } from './oldManWarBooks-routing.module';


@NgModule({
  declarations: [
    oldManWarBooksPageComponent,
    oldManWarBooksComponent
  ],
  imports: [
    CommonModule,
    oldManWarBooksRoutingModule
  ]
})
export class oldManWarBooksModule { }
