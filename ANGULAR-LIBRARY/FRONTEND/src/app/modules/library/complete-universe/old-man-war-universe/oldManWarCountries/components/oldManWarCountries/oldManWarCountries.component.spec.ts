import { ComponentFixture, TestBed } from '@angular/core/testing';

import { oldManWarCountriesComponent } from './oldManWarCountries.component';

describe('oldManWarCountriesComponent', () => {
  let component: oldManWarCountriesComponent;
  let fixture: ComponentFixture<oldManWarCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [oldManWarCountriesComponent]
    });
    fixture = TestBed.createComponent(oldManWarCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
