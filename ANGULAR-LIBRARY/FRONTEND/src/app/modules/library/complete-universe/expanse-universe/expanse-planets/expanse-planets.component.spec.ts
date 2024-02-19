import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansePlanetsComponent } from './expanse-planets.component';

describe('ExpansePlanetsComponent', () => {
  let component: ExpansePlanetsComponent;
  let fixture: ComponentFixture<ExpansePlanetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpansePlanetsComponent]
    });
    fixture = TestBed.createComponent(ExpansePlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
