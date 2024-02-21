import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { honorverseBooksRoutingModule } from './honorverseBooks-routing.module';
import { honorverseBooksPageComponent } from './pages/honorverseBooks-page/honorverseBooks-page.component';
import { honorverseBooksComponent } from './components/honorverseBooks/honorverseBooks.component';


@NgModule({
  declarations: [
    honorverseBooksPageComponent,
    honorverseBooksComponent
  ],
  imports: [
    CommonModule,
    honorverseBooksRoutingModule
  ]
})
export class honorverseBooksModule { }
