
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryRoutingModule } from './library-routing.module';
// import { BooksComponent } from './books/books.component';
import { UniverseComponent } from './universe/universe.component';
import { CompleteUniverseModule } from './complete-universe/complete-universe.module';
import { AwardsModule } from './awards/awards.module';
import { AuthModule } from '../auth/auth.module';




@NgModule({
  declarations: [
    // BooksComponent,
    UniverseComponent,

  
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    CompleteUniverseModule,
    AwardsModule,
    AuthModule
  ],
  exports: [
    CompleteUniverseModule
  ]
})
export class LibraryModule {
  
 }
