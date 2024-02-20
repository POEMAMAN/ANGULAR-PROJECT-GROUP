import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundacionPlanetsComponent } from './fundacion-planets.component';

describe('FundacionPlanetsComponent', () => {
  let component: FundacionPlanetsComponent;
  let fixture: ComponentFixture<FundacionPlanetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FundacionPlanetsComponent]
    });
    fixture = TestBed.createComponent(FundacionPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
