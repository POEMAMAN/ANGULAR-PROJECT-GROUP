import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeafordCountriesComponent } from './seaford-countries.component';

describe('SeafordCountriesComponent', () => {
  let component: SeafordCountriesComponent;
  let fixture: ComponentFixture<SeafordCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeafordCountriesComponent]
    });
    fixture = TestBed.createComponent(SeafordCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
