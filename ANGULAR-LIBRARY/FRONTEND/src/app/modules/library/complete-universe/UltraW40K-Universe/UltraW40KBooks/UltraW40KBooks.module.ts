import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UltraW40KBooksRoutingModule } from './UltraW40KBooks-routing.module';
import { UltraW40KBooksPageComponent } from './pages/UltraW40KBooks-page/UltraW40KBooks-page.component';
import { UltraW40KBooksComponent } from './components/UltraW40KBooks/UltraW40KBooks.component';


@NgModule({
  declarations: [
    UltraW40KBooksPageComponent,
    UltraW40KBooksComponent
  ],
  imports: [
    CommonModule,
    UltraW40KBooksRoutingModule
  ]
})
export class UltraW40KBooksModule { }
