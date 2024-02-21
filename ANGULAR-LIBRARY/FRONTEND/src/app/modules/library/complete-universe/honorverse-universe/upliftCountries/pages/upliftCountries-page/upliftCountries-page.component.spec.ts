import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpliftCountriesPageComponent } from './upliftCountries-page.component';

describe('UpliftCountriesPageComponent', () => {
  let component: UpliftCountriesPageComponent;
  let fixture: ComponentFixture<UpliftCountriesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpliftCountriesPageComponent]
    });
    fixture = TestBed.createComponent(UpliftCountriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
