import { ComponentFixture, TestBed } from '@angular/core/testing';

import { gauntW40KCountriesPageComponent } from './gauntW40KCountries-page.component';

describe('gauntW40KCountriesPageComponent', () => {
  let component: gauntW40KCountriesPageComponent;
  let fixture: ComponentFixture<gauntW40KCountriesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [gauntW40KCountriesPageComponent]
    });
    fixture = TestBed.createComponent(gauntW40KCountriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
