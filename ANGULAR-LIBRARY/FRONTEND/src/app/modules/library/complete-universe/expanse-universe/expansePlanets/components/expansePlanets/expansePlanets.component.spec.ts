import { ComponentFixture, TestBed } from '@angular/core/testing';

import { expansePlanetsComponent } from './expansePlanets.component';

describe('expansePlanetsComponent', () => {
  let component: expansePlanetsComponent;
  let fixture: ComponentFixture<expansePlanetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [expansePlanetsComponent]
    });
    fixture = TestBed.createComponent(expansePlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
