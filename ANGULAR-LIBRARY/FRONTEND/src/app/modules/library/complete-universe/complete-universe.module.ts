import { ForeverWarUniverseModule } from './forever-war-universe/forever-war-universe.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteUniverseRoutingModule } from './complete-universe-routing.module';
import { DuneUniverseModule } from './dune-universe/dune-universe.module';
import { ExpanseUniverseModule } from './expanse-universe/expanse-universe.module';
import { HonorverseUniverseModule } from './honorverse-universe/honorverse-universe.module';
import { OldManWarUniverseModule } from './old-man-war-universe/old-man-war-universe.module';
import { SeafordUniverseModule } from './seaford-universe/seaford-universe.module';
import { UltraW40KUniverseModule } from './UltraW40K-Universe/ultra-w40k-universe.module';
import { UpliftUniverseModule } from './uplift-universe/uplift-universe.module';
import { GauntW40KUniverseModule } from './gaunt-w40k-universe/gaunt-w40k-universe.module';
import { GalacticCenterUniverseModule } from './galactic-center-universe/galactic-center-universe.module';
import { FundacionUniverseModule } from './fundacion-universe/fundacion-universe.module';
import { CompleteUniverseComponent } from './complete-universe.component';



@NgModule({
  declarations: [
    CompleteUniverseComponent
    
  ],
  imports: [
    CommonModule,
    CompleteUniverseRoutingModule,
    DuneUniverseModule,
    ExpanseUniverseModule,
    ForeverWarUniverseModule,
    HonorverseUniverseModule,
    OldManWarUniverseModule,
    SeafordUniverseModule,
    UltraW40KUniverseModule,
    UpliftUniverseModule,
    GauntW40KUniverseModule,
    GalacticCenterUniverseModule,
    FundacionUniverseModule

  ],
})
export class CompleteUniverseModule { }
