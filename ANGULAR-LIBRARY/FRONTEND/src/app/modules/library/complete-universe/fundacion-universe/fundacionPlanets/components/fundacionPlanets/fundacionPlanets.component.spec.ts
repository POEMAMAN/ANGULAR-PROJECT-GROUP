import { ComponentFixture, TestBed } from '@angular/core/testing';

import { fundacionPlanetsComponent } from './fundacionPlanets.component';

describe('fundacionPlanetsComponent', () => {
  let component: fundacionPlanetsComponent;
  let fixture: ComponentFixture<fundacionPlanetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [fundacionPlanetsComponent]
    });
    fixture = TestBed.createComponent(fundacionPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
