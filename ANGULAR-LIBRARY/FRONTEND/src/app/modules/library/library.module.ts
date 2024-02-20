
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryRoutingModule } from './library-routing.module';
// import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors/authors.component';
import { UniverseComponent } from './universe/universe.component';
import { CompleteUniverseModule } from './complete-universe/complete-universe.module';
import { AwardsModule } from './awards/awards.module';




@NgModule({
  declarations: [
    // BooksComponent,
    AuthorsComponent,
    UniverseComponent,

  
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    CompleteUniverseModule,
    AwardsModule
  ],
  exports: [
    CompleteUniverseModule
  ]
})
export class LibraryModule {
  
 }
