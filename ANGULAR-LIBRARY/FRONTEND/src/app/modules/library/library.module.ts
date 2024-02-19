import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { AwardsComponent } from './awards/awards.component';
import { UniverseComponent } from './universe/universe.component';
import { CompleteUniverseComponent } from './complete-universe/complete-universe.component';



@NgModule({
  declarations: [
    BooksComponent,
    AuthorsComponent,
    AwardsComponent,
    UniverseComponent,
    CompleteUniverseComponent,
  
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule
  ]
})
export class LibraryModule { }
