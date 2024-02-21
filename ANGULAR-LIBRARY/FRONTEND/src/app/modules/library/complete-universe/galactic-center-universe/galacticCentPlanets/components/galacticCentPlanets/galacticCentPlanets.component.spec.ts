import { ComponentFixture, TestBed } from '@angular/core/testing';

import { galacticCentPlanetsComponent } from './galacticCentPlanets.component';

describe('galacticCentPlanetsComponent', () => {
  let component: galacticCentPlanetsComponent;
  let fixture: ComponentFixture<galacticCentPlanetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [galacticCentPlanetsComponent]
    });
    fixture = TestBed.createComponent(galacticCentPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
