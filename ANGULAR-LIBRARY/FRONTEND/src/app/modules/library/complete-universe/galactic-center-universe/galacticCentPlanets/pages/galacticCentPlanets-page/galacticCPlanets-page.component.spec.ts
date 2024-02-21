import { ComponentFixture, TestBed } from '@angular/core/testing';

import { galacticCentPlanetsPageComponent } from './galacticCentPlanets-page.component';

describe('galacticCentPlanetsPageComponent', () => {
  let component: galacticCentPlanetsPageComponent;
  let fixture: ComponentFixture<galacticCentPlanetsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [galacticCentPlanetsPageComponent]
    });
    fixture = TestBed.createComponent(galacticCentPlanetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
