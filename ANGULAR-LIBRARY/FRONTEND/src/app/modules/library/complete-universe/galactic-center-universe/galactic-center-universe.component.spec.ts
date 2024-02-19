import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalacticCenterUniverseComponent } from './galactic-center-universe.component';

describe('GalacticCenterUniverseComponent', () => {
  let component: GalacticCenterUniverseComponent;
  let fixture: ComponentFixture<GalacticCenterUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalacticCenterUniverseComponent]
    });
    fixture = TestBed.createComponent(GalacticCenterUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
