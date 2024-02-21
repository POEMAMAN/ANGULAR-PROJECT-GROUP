import { ComponentFixture, TestBed } from '@angular/core/testing';

import { honorverseCountriesPageComponent } from './honorverseCountries-page.component';

describe('honorverseCountriesPageComponent', () => {
  let component: honorverseCountriesPageComponent;
  let fixture: ComponentFixture<honorverseCountriesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [honorverseCountriesPageComponent]
    });
    fixture = TestBed.createComponent(honorverseCountriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
