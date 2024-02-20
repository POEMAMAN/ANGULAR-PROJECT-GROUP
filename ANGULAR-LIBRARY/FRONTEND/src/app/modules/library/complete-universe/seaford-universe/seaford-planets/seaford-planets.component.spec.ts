import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeafordPlanetsComponent } from './seaford-planets.component';

describe('SeafordPlanetsComponent', () => {
  let component: SeafordPlanetsComponent;
  let fixture: ComponentFixture<SeafordPlanetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeafordPlanetsComponent]
    });
    fixture = TestBed.createComponent(SeafordPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
