import { ComponentFixture, TestBed } from '@angular/core/testing';

import { oldManWarCountriesPageComponent } from './oldManWarCountries-page.component';

describe('oldManWarCountriesPageComponent', () => {
  let component: oldManWarCountriesPageComponent;
  let fixture: ComponentFixture<oldManWarCountriesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [oldManWarCountriesPageComponent]
    });
    fixture = TestBed.createComponent(oldManWarCountriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
