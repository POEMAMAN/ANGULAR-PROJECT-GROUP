import { ComponentFixture, TestBed } from '@angular/core/testing';

import { gauntW40KPlanetsPageComponent } from './gauntW40KPlanets-page.component';

describe('gauntW40KPlanetsPageComponent', () => {
  let component: gauntW40KPlanetsPageComponent;
  let fixture: ComponentFixture<gauntW40KPlanetsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [gauntW40KPlanetsPageComponent]
    });
    fixture = TestBed.createComponent(gauntW40KPlanetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
