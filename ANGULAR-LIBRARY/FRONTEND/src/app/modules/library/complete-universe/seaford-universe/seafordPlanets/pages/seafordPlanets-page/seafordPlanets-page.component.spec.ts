import { ComponentFixture, TestBed } from '@angular/core/testing';

import { seafordPlanetsPageComponent } from './seafordPlanets-page.component';

describe('seafordPlanetsPageComponent', () => {
  let component: seafordPlanetsPageComponent;
  let fixture: ComponentFixture<seafordPlanetsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [seafordPlanetsPageComponent]
    });
    fixture = TestBed.createComponent(seafordPlanetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
