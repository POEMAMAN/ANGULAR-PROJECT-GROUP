import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpanseUniverseComponent } from './expanse-universe.component';

describe('ExpanseUniverseComponent', () => {
  let component: ExpanseUniverseComponent;
  let fixture: ComponentFixture<ExpanseUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpanseUniverseComponent]
    });
    fixture = TestBed.createComponent(ExpanseUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
