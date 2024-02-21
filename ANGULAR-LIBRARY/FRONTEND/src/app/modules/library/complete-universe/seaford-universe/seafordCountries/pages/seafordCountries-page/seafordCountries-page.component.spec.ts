import { ComponentFixture, TestBed } from '@angular/core/testing';

import { seafordCountriesPageComponent } from './seafordCountries-page.component';

describe('seafordCountriesPageComponent', () => {
  let component: seafordCountriesPageComponent;
  let fixture: ComponentFixture<seafordCountriesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [seafordCountriesPageComponent]
    });
    fixture = TestBed.createComponent(seafordCountriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
