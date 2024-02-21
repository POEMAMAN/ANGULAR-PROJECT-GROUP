import { ComponentFixture, TestBed } from '@angular/core/testing';

import { forEverWarCountriesPageComponent } from './forEverWarCountries-page.component';

describe('forEverWarCountriesPageComponent', () => {
  let component: forEverWarCountriesPageComponent;
  let fixture: ComponentFixture<forEverWarCountriesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [forEverWarCountriesPageComponent]
    });
    fixture = TestBed.createComponent(forEverWarCountriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
