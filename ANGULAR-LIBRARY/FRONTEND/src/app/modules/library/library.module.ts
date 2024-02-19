import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { BooksComponent } from './Library/books/books.component';
import { AuthorsComponent } from './Library/authors/authors.component';
import { AwardsComponent } from './Library/awards/awards.component';
import { UniverseComponent } from './Library/universe/universe.component';
import { CompleteUniverseComponent } from './Library/complete-universe/complete-universe.component';
import { DuneUniverseComponent } from './CompleteUniverse/dune-universe/dune-universe.component';
import { ExpanseUniverseComponent } from './CompleteUniverse/expanse-universe/expanse-universe.component';
import { ForeverWarUniverseComponent } from './CompleteUniverse/forever-war-universe/forever-war-universe.component';
import { FundacionUniverseComponent } from './CompleteUniverse/fundacion-universe/fundacion-universe.component';
import { GalacticCenterUniverseComponent } from './CompleteUniverse/galactic-center-universe/galactic-center-universe.component';
import { GauntW40KUniverseComponent } from './CompleteUniverse/gaunt-w40-kuniverse/gaunt-w40-kuniverse.component';
import { HonorverseUniverseComponent } from './CompleteUniverse/honorverse-universe/honorverse-universe.component';
import { OldManWarUniverseComponent } from './CompleteUniverse/old-man-war-universe/old-man-war-universe.component';
import { SeafordUniverseComponent } from './CompleteUniverse/seaford-universe/seaford-universe.component';
import { UltraW40KUniverseComponent } from './CompleteUniverse/ultra-w40-kuniverse/ultra-w40-kuniverse.component';
import { UpliftUniverseComponent } from './CompleteUniverse/uplift-universe/uplift-universe.component';


@NgModule({
  declarations: [
    BooksComponent,
    AuthorsComponent,
    AwardsComponent,
    UniverseComponent,
    CompleteUniverseComponent,
    DuneUniverseComponent,
    ExpanseUniverseComponent,
    ForeverWarUniverseComponent,
    FundacionUniverseComponent,
    GalacticCenterUniverseComponent,
    GauntW40KUniverseComponent,
    HonorverseUniverseComponent,
    OldManWarUniverseComponent,
    SeafordUniverseComponent,
    UltraW40KUniverseComponent,
    UpliftUniverseComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule
  ]
})
export class LibraryModule { }
