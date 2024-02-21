import { ComponentFixture, TestBed } from '@angular/core/testing';

import { galacticCentCountriesComponent } from './galacticCentCountries.component';

describe('galacticCentCountriesComponent', () => {
  let component: galacticCentCountriesComponent;
  let fixture: ComponentFixture<galacticCentCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [galacticCentCountriesComponent]
    });
    fixture = TestBed.createComponent(galacticCentCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
