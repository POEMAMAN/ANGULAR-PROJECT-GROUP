import { ComponentFixture, TestBed } from '@angular/core/testing';

import { gauntW40KPlanetsComponent } from './gauntW40KPlanets.component';

describe('gauntW40KPlanetsComponent', () => {
  let component: gauntW40KPlanetsComponent;
  let fixture: ComponentFixture<gauntW40KPlanetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [gauntW40KPlanetsComponent]
    });
    fixture = TestBed.createComponent(gauntW40KPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
