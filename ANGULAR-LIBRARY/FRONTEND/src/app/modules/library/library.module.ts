import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryPageComponent } from './pages/library-page/library-page.component';
import { LibraryComponent } from './components/library/library.component';


@NgModule({
  declarations: [
    LibraryComponent,
    LibraryPageComponent

  ],
  imports: [
    CommonModule,
    LibraryRoutingModule
  ]
})
export class LibraryModule { }
