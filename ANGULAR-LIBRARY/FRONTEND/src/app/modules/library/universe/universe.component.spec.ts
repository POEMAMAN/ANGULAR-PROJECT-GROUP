import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniverseComponent } from './universe.component';

describe('UniverseComponent', () => {
  let component: UniverseComponent;
  let fixture: ComponentFixture<UniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UniverseComponent]
    });
    fixture = TestBed.createComponent(UniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
