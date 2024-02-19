import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuneCountriesComponent } from './dune-countries.component';

describe('DuneCountriesComponent', () => {
  let component: DuneCountriesComponent;
  let fixture: ComponentFixture<DuneCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DuneCountriesComponent]
    });
    fixture = TestBed.createComponent(DuneCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
