
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryRoutingModule } from './library-routing.module';
import { CompleteUniverseModule } from './complete-universe/complete-universe.module';
import { AwardsModule } from './awards/awards.module';
import { BooksModule } from './books/books.module';

import { AuthorsModule } from './authors/authors.module';
import { UniversesModule } from './universes/universes.module';
import { FreeBooksComponent } from './free-books/free-books.component';

@NgModule({
  declarations: [
  
    FreeBooksComponent
  ],
  imports: [
    LibraryRoutingModule,
    CommonModule,
    CompleteUniverseModule,
    AwardsModule,
    BooksModule,
    UniversesModule,
    AuthorsModule
  ],
  exports: [
    CompleteUniverseModule
  ]
})
export class LibraryModule {
  
 }
