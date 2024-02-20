import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalacticCenterPlanetsComponent } from './galactic-center-planets.component';

describe('GalacticCenterPlanetsComponent', () => {
  let component: GalacticCenterPlanetsComponent;
  let fixture: ComponentFixture<GalacticCenterPlanetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalacticCenterPlanetsComponent]
    });
    fixture = TestBed.createComponent(GalacticCenterPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
