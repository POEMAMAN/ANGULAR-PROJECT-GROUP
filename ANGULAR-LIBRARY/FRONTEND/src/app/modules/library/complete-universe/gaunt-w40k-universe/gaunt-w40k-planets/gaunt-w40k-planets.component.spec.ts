import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GauntW40KPlanetsComponent } from './gaunt-w40k-planets.component';

describe('GauntW40KPlanetsComponent', () => {
  let component: GauntW40KPlanetsComponent;
  let fixture: ComponentFixture<GauntW40KPlanetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GauntW40KPlanetsComponent]
    });
    fixture = TestBed.createComponent(GauntW40KPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
