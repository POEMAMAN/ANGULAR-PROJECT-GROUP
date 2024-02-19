import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltraW40KUniverseComponent } from './ultra-w40-kuniverse.component';

describe('UltraW40KUniverseComponent', () => {
  let component: UltraW40KUniverseComponent;
  let fixture: ComponentFixture<UltraW40KUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UltraW40KUniverseComponent]
    });
    fixture = TestBed.createComponent(UltraW40KUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
