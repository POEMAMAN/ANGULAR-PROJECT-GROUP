import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltraW40KCountriesPageComponent } from './UltraW40KCountries-page.component';

describe('UltraW40KCountriesPageComponent', () => {
  let component: UltraW40KCountriesPageComponent;
  let fixture: ComponentFixture<UltraW40KCountriesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UltraW40KCountriesPageComponent]
    });
    fixture = TestBed.createComponent(UltraW40KCountriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
