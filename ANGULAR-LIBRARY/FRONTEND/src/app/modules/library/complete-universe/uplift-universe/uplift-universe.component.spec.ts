import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpliftUniverseComponent } from './uplift-universe.component';

describe('UpliftUniverseComponent', () => {
  let component: UpliftUniverseComponent;
  let fixture: ComponentFixture<UpliftUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpliftUniverseComponent]
    });
    fixture = TestBed.createComponent(UpliftUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
