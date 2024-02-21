import { ComponentFixture, TestBed } from '@angular/core/testing';

import { duneCountriesPageComponent } from './duneCountries-page.component';

describe('duneCountriesPageComponent', () => {
  let component: duneCountriesPageComponent;
  let fixture: ComponentFixture<duneCountriesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [duneCountriesPageComponent]
    });
    fixture = TestBed.createComponent(duneCountriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
