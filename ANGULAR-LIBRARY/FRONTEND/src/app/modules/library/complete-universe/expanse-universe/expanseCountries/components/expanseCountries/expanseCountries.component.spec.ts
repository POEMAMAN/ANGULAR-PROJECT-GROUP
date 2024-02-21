import { ComponentFixture, TestBed } from '@angular/core/testing';

import { expanseCountriesComponent } from './expanseCountries.component';

describe('expanseCountriesComponent', () => {
  let component: expanseCountriesComponent;
  let fixture: ComponentFixture<expanseCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [expanseCountriesComponent]
    });
    fixture = TestBed.createComponent(expanseCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
