import { ComponentFixture, TestBed } from '@angular/core/testing';

import { expansePlanetsPageComponent } from './expansePlanets-page.component';

describe('expansePlanetsPageComponent', () => {
  let component: expansePlanetsPageComponent;
  let fixture: ComponentFixture<expansePlanetsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [expansePlanetsPageComponent]
    });
    fixture = TestBed.createComponent(expansePlanetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
