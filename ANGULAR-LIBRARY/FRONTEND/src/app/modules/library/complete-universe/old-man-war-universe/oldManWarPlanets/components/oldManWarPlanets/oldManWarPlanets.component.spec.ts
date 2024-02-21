import { ComponentFixture, TestBed } from '@angular/core/testing';

import { oldManWarPlanetsComponent } from './oldManWarPlanets.component';

describe('oldManWarPlanetsComponent', () => {
  let component: oldManWarPlanetsComponent;
  let fixture: ComponentFixture<oldManWarPlanetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [oldManWarPlanetsComponent]
    });
    fixture = TestBed.createComponent(oldManWarPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
