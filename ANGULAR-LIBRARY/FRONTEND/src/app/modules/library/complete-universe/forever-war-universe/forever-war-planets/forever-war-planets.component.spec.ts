import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeverWarPlanetsComponent } from './forever-war-planets.component';

describe('ForeverWarPlanetsComponent', () => {
  let component: ForeverWarPlanetsComponent;
  let fixture: ComponentFixture<ForeverWarPlanetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForeverWarPlanetsComponent]
    });
    fixture = TestBed.createComponent(ForeverWarPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
