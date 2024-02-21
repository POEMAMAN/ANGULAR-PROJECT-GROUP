import { ComponentFixture, TestBed } from '@angular/core/testing';

import { forEverWarPlanetsPageComponent } from './forEverWarPlanets-page.component';

describe('forEverWarPlanetsPageComponent', () => {
  let component: forEverWarPlanetsPageComponent;
  let fixture: ComponentFixture<forEverWarPlanetsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [forEverWarPlanetsPageComponent]
    });
    fixture = TestBed.createComponent(forEverWarPlanetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
