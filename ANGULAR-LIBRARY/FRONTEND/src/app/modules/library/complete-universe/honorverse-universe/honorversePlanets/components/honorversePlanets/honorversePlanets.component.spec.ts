import { ComponentFixture, TestBed } from '@angular/core/testing';

import { honorversePlanetsComponent } from './honorversePlanets.component';

describe('honorversePlanetsComponent', () => {
  let component: honorversePlanetsComponent;
  let fixture: ComponentFixture<honorversePlanetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [honorversePlanetsComponent]
    });
    fixture = TestBed.createComponent(honorversePlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
