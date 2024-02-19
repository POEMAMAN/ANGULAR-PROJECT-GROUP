import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalacticCenterCountriesComponent } from './galactic-center-countries.component';

describe('GalacticCenterCountriesComponent', () => {
  let component: GalacticCenterCountriesComponent;
  let fixture: ComponentFixture<GalacticCenterCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalacticCenterCountriesComponent]
    });
    fixture = TestBed.createComponent(GalacticCenterCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
