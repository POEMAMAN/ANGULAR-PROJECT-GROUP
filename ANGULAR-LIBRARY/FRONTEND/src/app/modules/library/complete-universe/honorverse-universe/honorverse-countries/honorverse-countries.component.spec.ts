import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonorverseCountriesComponent } from './honorverse-countries.component';

describe('HonorverseCountriesComponent', () => {
  let component: HonorverseCountriesComponent;
  let fixture: ComponentFixture<HonorverseCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HonorverseCountriesComponent]
    });
    fixture = TestBed.createComponent(HonorverseCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
