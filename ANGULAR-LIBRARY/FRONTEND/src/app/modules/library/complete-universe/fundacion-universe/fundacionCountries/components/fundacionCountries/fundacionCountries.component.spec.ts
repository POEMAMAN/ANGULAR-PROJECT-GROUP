import { ComponentFixture, TestBed } from '@angular/core/testing';

import { gauntW40KCountriesComponent } from './gauntW40KCountries.component';

describe('gauntW40KCountriesComponent', () => {
  let component: gauntW40KCountriesComponent;
  let fixture: ComponentFixture<gauntW40KCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [gauntW40KCountriesComponent]
    });
    fixture = TestBed.createComponent(gauntW40KCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
