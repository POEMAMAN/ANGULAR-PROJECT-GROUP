
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryRoutingModule } from './library-routing.module';
import { CompleteUniverseModule } from './complete-universe/complete-universe.module';
import { AwardsModule } from './awards/awards.module';
import { BooksModule } from './books/books.module';
import { UniversesModule } from './universe/universes.module';
import { AuthorsModule } from './authors/authors.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
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
