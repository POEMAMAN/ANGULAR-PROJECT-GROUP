import { ComponentFixture, TestBed } from '@angular/core/testing';

import { galacticCentCountriesPageComponent } from './galacticCentCountries-page.component';

describe('galacticCentCountriesPageComponent', () => {
  let component: galacticCentCountriesPageComponent;
  let fixture: ComponentFixture<galacticCentCountriesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [galacticCentCountriesPageComponent]
    });
    fixture = TestBed.createComponent(galacticCentCountriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
