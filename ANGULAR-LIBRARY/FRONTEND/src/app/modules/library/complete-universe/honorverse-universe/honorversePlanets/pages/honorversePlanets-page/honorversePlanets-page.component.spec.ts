import { ComponentFixture, TestBed } from '@angular/core/testing';

import { honorversePlanetsPageComponent } from './honorversePlanets-page.component';

describe('honorversePlanetsPageComponent', () => {
  let component: honorversePlanetsPageComponent;
  let fixture: ComponentFixture<honorversePlanetsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [honorversePlanetsPageComponent]
    });
    fixture = TestBed.createComponent(honorversePlanetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
