import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltraW40KPlanetsPageComponent } from './UltraW40KPlanets-page.component';

describe('UltraW40KPlanetsPageComponent', () => {
  let component: UltraW40KPlanetsPageComponent;
  let fixture: ComponentFixture<UltraW40KPlanetsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UltraW40KPlanetsPageComponent]
    });
    fixture = TestBed.createComponent(UltraW40KPlanetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
