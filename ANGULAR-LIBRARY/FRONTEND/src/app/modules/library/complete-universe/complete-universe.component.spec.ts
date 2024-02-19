import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteUniverseComponent } from './complete-universe.component';

describe('CompleteUniverseComponent', () => {
  let component: CompleteUniverseComponent;
  let fixture: ComponentFixture<CompleteUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompleteUniverseComponent]
    });
    fixture = TestBed.createComponent(CompleteUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
