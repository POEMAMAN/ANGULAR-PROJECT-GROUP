import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpliftPlanetsComponent } from './upliftPlanets.component';

describe('UpliftPlanetsComponent', () => {
  let component: UpliftPlanetsComponent;
  let fixture: ComponentFixture<UpliftPlanetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpliftPlanetsComponent]
    });
    fixture = TestBed.createComponent(UpliftPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
