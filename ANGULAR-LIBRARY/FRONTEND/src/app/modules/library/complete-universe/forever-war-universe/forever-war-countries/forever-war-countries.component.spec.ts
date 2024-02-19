import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeverWarCountriesComponent } from './forever-war-countries.component';

describe('ForeverWarCountriesComponent', () => {
  let component: ForeverWarCountriesComponent;
  let fixture: ComponentFixture<ForeverWarCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForeverWarCountriesComponent]
    });
    fixture = TestBed.createComponent(ForeverWarCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
