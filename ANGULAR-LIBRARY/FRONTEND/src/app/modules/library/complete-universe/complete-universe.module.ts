import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompleteUniverseRoutingModule } from './complete-universe-routing.module';
import { DuneUniverseComponent } from './dune-universe/dune-universe.component';
import { ExpanseUniverseComponent } from './expanse-universe/expanse-universe.component';
import { ForeverWarUniverseComponent } from './forever-war-universe/forever-war-universe.component';
import { FundacionUniverseComponent } from './fundacion-universe/fundacion-universe.component';
import { GalacticCenterUniverseComponent } from './galactic-center-universe/galactic-center-universe.component';
import { GauntW40KUniverseComponent } from './gaunt-w40-kuniverse/gaunt-w40k-universe.component';
import { HonorverseUniverseComponent } from './honorverse-universe/honorverse-universe.component';
import { OldManWarUniverseComponent } from './old-man-war-universe/old-man-war-universe.component';
import { SeafordUniverseComponent } from './seaford-universe/seaford-universe.component';
import { UltraW40KUniverseComponent } from './UltraW40K-Universe/ultra-w40k-universe.component';
import { UpliftUniverseComponent } from './uplift-universe/uplift-universe.component';



@NgModule({
  declarations: [
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
    CompleteUniverseRoutingModule
  ]
})
export class CompleteUniverseModule { }
