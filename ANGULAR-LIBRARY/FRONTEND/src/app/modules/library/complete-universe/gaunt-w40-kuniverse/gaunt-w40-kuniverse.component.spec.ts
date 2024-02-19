import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GauntW40KUniverseComponent } from './gaunt-w40-kuniverse.component';

describe('GauntW40KUniverseComponent', () => {
  let component: GauntW40KUniverseComponent;
  let fixture: ComponentFixture<GauntW40KUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GauntW40KUniverseComponent]
    });
    fixture = TestBed.createComponent(GauntW40KUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
