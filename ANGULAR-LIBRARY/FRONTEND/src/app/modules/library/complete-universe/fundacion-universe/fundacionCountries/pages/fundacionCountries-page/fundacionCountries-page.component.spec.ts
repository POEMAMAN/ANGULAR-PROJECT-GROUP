import { ComponentFixture, TestBed } from '@angular/core/testing';

import { fundacionCountriesPageComponent } from './fundacionCountries-page.component';

describe('fundacionCountriesPageComponent', () => {
  let component: fundacionCountriesPageComponent;
  let fixture: ComponentFixture<fundacionCountriesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [fundacionCountriesPageComponent]
    });
    fixture = TestBed.createComponent(fundacionCountriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
