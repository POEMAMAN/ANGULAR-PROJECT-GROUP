import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { fundacionBooksRoutingModule } from './fundacionBooks-routing.module';
import { fundacionBooksPageComponent } from './pages/fundacionBooks-page/fundacionBooks-page.component';
import { fundacionBooksComponent } from './components/fundacionBooks/fundacionBooks.component';


@NgModule({
  declarations: [
    fundacionBooksPageComponent,
    fundacionBooksComponent
  ],
  imports: [
    CommonModule,
    fundacionBooksRoutingModule
  ]
})
export class fundacionBooksModule { }
