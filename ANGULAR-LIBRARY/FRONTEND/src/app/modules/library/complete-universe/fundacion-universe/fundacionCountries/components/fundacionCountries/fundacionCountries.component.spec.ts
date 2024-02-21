import { ComponentFixture, TestBed } from '@angular/core/testing';

import { fundacionCountriesComponent } from './fundacionCountries.component';

describe('fundacionCountriesComponent', () => {
  let component: fundacionCountriesComponent;
  let fixture: ComponentFixture<fundacionCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [fundacionCountriesComponent]
    });
    fixture = TestBed.createComponent(fundacionCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
