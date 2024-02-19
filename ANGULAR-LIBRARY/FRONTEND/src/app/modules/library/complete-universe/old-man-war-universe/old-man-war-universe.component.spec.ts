import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldManWarUniverseComponent } from './old-man-war-universe.component';

describe('OldManWarUniverseComponent', () => {
  let component: OldManWarUniverseComponent;
  let fixture: ComponentFixture<OldManWarUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OldManWarUniverseComponent]
    });
    fixture = TestBed.createComponent(OldManWarUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
