import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { seafordBooksRoutingModule } from './seafordBooks-routing.module';
import { seafordBooksPageComponent } from './pages/seafordBooks-page/seafordBooks-page.component';
import { seafordBooksComponent } from './components/seafordBooks/seafordBooks.component';


@NgModule({
  declarations: [
    seafordBooksPageComponent,
    seafordBooksComponent
  ],
  imports: [
    CommonModule,
    seafordBooksRoutingModule
  ]
})
export class seafordBooksModule { }
