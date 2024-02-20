import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltraW40KPlanetsComponent } from './ultra-w40-kplanets.component';

describe('UltraW40KPlanetsComponent', () => {
  let component: UltraW40KPlanetsComponent;
  let fixture: ComponentFixture<UltraW40KPlanetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UltraW40KPlanetsComponent]
    });
    fixture = TestBed.createComponent(UltraW40KPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
