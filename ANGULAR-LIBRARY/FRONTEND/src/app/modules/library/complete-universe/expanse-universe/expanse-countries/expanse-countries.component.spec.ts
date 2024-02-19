import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpanseCountriesComponent } from './expanse-countries.component';

describe('ExpanseCountriesComponent', () => {
  let component: ExpanseCountriesComponent;
  let fixture: ComponentFixture<ExpanseCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpanseCountriesComponent]
    });
    fixture = TestBed.createComponent(ExpanseCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
