import { ComponentFixture, TestBed } from '@angular/core/testing';

import { forEverWarPlanetsComponent } from './forEverWarPlanets.component';

describe('forEverWarPlanetsComponent', () => {
  let component: forEverWarPlanetsComponent;
  let fixture: ComponentFixture<forEverWarPlanetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [forEverWarPlanetsComponent]
    });
    fixture = TestBed.createComponent(forEverWarPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
