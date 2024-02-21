import { ComponentFixture, TestBed } from '@angular/core/testing';

import { seafordPlanetsComponent } from './seafordPlanets.component';

describe('seafordPlanetsComponent', () => {
  let component: seafordPlanetsComponent;
  let fixture: ComponentFixture<seafordPlanetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [seafordPlanetsComponent]
    });
    fixture = TestBed.createComponent(seafordPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
