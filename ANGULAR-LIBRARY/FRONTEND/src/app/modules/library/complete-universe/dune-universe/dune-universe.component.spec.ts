import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuneUniverseComponent } from './dune-universe.component';

describe('DuneUniverseComponent', () => {
  let component: DuneUniverseComponent;
  let fixture: ComponentFixture<DuneUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DuneUniverseComponent]
    });
    fixture = TestBed.createComponent(DuneUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
