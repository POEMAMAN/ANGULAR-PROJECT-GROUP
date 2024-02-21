import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpliftCountriesComponent } from './upliftCountries.component';

describe('UpliftCountriesComponent', () => {
  let component: UpliftCountriesComponent;
  let fixture: ComponentFixture<UpliftCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpliftCountriesComponent]
    });
    fixture = TestBed.createComponent(UpliftCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
