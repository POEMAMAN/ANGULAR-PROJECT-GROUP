import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltraW40KCountriesComponent } from './ultra-w40-kcountries.component';

describe('UltraW40KCountriesComponent', () => {
  let component: UltraW40KCountriesComponent;
  let fixture: ComponentFixture<UltraW40KCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UltraW40KCountriesComponent]
    });
    fixture = TestBed.createComponent(UltraW40KCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
