import { ComponentFixture, TestBed } from '@angular/core/testing';

import { dunePlanetsPageComponent } from './dunePlanets-page.component';

describe('dunePlanetsPageComponent', () => {
  let component: dunePlanetsPageComponent;
  let fixture: ComponentFixture<dunePlanetsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [dunePlanetsPageComponent]
    });
    fixture = TestBed.createComponent(dunePlanetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
