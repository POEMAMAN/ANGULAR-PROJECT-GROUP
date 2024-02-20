
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryRoutingModule } from './library-routing.module';
import { UniverseComponent } from './universe/universe.component';
import { CompleteUniverseModule } from './complete-universe/complete-universe.module';
import { AwardsModule } from './awards/awards.module';
import { AuthModule } from '../auth/auth.module';
import { BooksModule } from './books/books.module';




@NgModule({
  declarations: [
    UniverseComponent,

  
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    CompleteUniverseModule,
    AwardsModule,
    AuthModule,
    BooksModule
  ],
  exports: [
    CompleteUniverseModule
  ]
})
export class LibraryModule {
  
 }
