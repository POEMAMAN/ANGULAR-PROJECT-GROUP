import { ComponentFixture, TestBed } from '@angular/core/testing';

import { honorverseCountriesComponent } from './honorverseCountries.component';

describe('honorverseCountriesComponent', () => {
  let component: honorverseCountriesComponent;
  let fixture: ComponentFixture<honorverseCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [honorverseCountriesComponent]
    });
    fixture = TestBed.createComponent(honorverseCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
