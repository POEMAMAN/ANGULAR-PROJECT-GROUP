import { ComponentFixture, TestBed } from '@angular/core/testing';

import { forEverWarCountriesComponent } from './forEverWarCountries.component';

describe('forEverWarCountriesComponent', () => {
  let component: forEverWarCountriesComponent;
  let fixture: ComponentFixture<forEverWarCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [forEverWarCountriesComponent]
    });
    fixture = TestBed.createComponent(forEverWarCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
