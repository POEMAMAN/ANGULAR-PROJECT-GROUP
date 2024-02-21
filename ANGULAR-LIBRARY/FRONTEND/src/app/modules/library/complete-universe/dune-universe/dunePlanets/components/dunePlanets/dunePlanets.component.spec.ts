import { ComponentFixture, TestBed } from '@angular/core/testing';

import { dunePlanetsComponent } from './dunePlanets.component';

describe('dunePlanetsComponent', () => {
  let component: dunePlanetsComponent;
  let fixture: ComponentFixture<dunePlanetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [dunePlanetsComponent]
    });
    fixture = TestBed.createComponent(dunePlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
