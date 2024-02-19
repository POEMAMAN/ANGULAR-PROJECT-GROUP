import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { AwardsComponent } from './awards/awards.component';
import { UniverseComponent } from './universe/universe.component';
import { CompleteUniverseModule } from './complete-universe/complete-universe.module';




@NgModule({
  declarations: [
    BooksComponent,
    AuthorsComponent,
    AwardsComponent,
    UniverseComponent,
   
  
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    CompleteUniverseModule
  ],
  exports: [
    CompleteUniverseModule
  ]
})
export class LibraryModule {
  
 }
