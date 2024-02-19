import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GauntW40KCountriesComponent } from './gaunt-w40-kcountries.component';

describe('GauntW40KCountriesComponent', () => {
  let component: GauntW40KCountriesComponent;
  let fixture: ComponentFixture<GauntW40KCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GauntW40KCountriesComponent]
    });
    fixture = TestBed.createComponent(GauntW40KCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
