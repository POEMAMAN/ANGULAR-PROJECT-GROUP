import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeafordUniverseComponent } from './seaford-universe.component';

describe('SeafordUniverseComponent', () => {
  let component: SeafordUniverseComponent;
  let fixture: ComponentFixture<SeafordUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeafordUniverseComponent]
    });
    fixture = TestBed.createComponent(SeafordUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
