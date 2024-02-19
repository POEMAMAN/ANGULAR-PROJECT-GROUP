import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DunePlanetsComponent } from './dune-planets.component';

describe('DunePlanetsComponent', () => {
  let component: DunePlanetsComponent;
  let fixture: ComponentFixture<DunePlanetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DunePlanetsComponent]
    });
    fixture = TestBed.createComponent(DunePlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
