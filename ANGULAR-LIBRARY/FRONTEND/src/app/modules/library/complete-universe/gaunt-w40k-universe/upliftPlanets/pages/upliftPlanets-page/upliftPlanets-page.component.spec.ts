import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpliftPlanetsPageComponent } from './upliftPlanets-page.component';

describe('UpliftPlanetsPageComponent', () => {
  let component: UpliftPlanetsPageComponent;
  let fixture: ComponentFixture<UpliftPlanetsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpliftPlanetsPageComponent]
    });
    fixture = TestBed.createComponent(UpliftPlanetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
