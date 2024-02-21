import { ComponentFixture, TestBed } from '@angular/core/testing';

import { fundacionPlanetsPageComponent } from './fundacionPlanets-page.component';

describe('fundacionPlanetsPageComponent', () => {
  let component: fundacionPlanetsPageComponent;
  let fixture: ComponentFixture<fundacionPlanetsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [fundacionPlanetsPageComponent]
    });
    fixture = TestBed.createComponent(fundacionPlanetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
