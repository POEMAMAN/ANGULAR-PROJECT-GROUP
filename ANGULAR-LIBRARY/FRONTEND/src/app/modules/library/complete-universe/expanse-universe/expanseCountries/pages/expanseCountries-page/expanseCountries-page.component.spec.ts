import { ComponentFixture, TestBed } from '@angular/core/testing';

import { expanseCountriesPageComponent } from './expanseCountries-page.component';

describe('expanseCountriesPageComponent', () => {
  let component: expanseCountriesPageComponent;
  let fixture: ComponentFixture<expanseCountriesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [expanseCountriesPageComponent]
    });
    fixture = TestBed.createComponent(expanseCountriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
