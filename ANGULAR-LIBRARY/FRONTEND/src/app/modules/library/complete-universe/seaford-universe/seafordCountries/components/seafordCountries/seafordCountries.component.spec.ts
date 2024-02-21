import { ComponentFixture, TestBed } from '@angular/core/testing';

import { seafordCountriesComponent } from './seafordCountries.component';

describe('seafordCountriesComponent', () => {
  let component: seafordCountriesComponent;
  let fixture: ComponentFixture<seafordCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [seafordCountriesComponent]
    });
    fixture = TestBed.createComponent(seafordCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
