import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundacionCountriesComponent } from './fundacion-countries.component';

describe('FundacionCountriesComponent', () => {
  let component: FundacionCountriesComponent;
  let fixture: ComponentFixture<FundacionCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FundacionCountriesComponent]
    });
    fixture = TestBed.createComponent(FundacionCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
