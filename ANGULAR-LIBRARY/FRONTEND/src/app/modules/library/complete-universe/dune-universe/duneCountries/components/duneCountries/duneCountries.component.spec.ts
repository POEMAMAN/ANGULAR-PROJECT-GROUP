import { ComponentFixture, TestBed } from '@angular/core/testing';

import { duneCountriesComponent } from './duneCountries.component';

describe('duneCountriesComponent', () => {
  let component: duneCountriesComponent;
  let fixture: ComponentFixture<duneCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [duneCountriesComponent]
    });
    fixture = TestBed.createComponent(duneCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
