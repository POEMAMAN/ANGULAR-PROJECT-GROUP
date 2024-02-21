import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { gauntW40KBooksRoutingModule } from './gauntW40KBooks-routing.module';
import { gauntW40KBooksPageComponent } from './pages/gauntW40KBooks-page/gauntW40KBooks-page.component';
import { gauntW40KBooksComponent } from './components/gauntW40KBooks/gauntW40KBooks.component';


@NgModule({
  declarations: [
    gauntW40KBooksPageComponent,
    gauntW40KBooksComponent
  ],
  imports: [
    CommonModule,
    gauntW40KBooksRoutingModule
  ]
})
export class gauntW40KBooksModule { }
