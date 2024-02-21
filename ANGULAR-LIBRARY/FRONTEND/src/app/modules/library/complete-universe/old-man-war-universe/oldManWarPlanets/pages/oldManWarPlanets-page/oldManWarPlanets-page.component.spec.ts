import { ComponentFixture, TestBed } from '@angular/core/testing';

import { oldManWarPlanetsPageComponent } from './oldManWarPlanets-page.component';

describe('oldManWarPlanetsPageComponent', () => {
  let component: oldManWarPlanetsPageComponent;
  let fixture: ComponentFixture<oldManWarPlanetsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [oldManWarPlanetsPageComponent]
    });
    fixture = TestBed.createComponent(oldManWarPlanetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
