import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeverWarUniverseComponent } from './forever-war-universe.component';

describe('ForeverWarUniverseComponent', () => {
  let component: ForeverWarUniverseComponent;
  let fixture: ComponentFixture<ForeverWarUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForeverWarUniverseComponent]
    });
    fixture = TestBed.createComponent(ForeverWarUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
