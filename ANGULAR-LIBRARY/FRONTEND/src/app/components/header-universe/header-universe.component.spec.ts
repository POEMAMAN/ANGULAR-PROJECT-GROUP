import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUniverseComponent } from './header-universe.component';

describe('HeaderUniverseComponent', () => {
  let component: HeaderUniverseComponent;
  let fixture: ComponentFixture<HeaderUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderUniverseComponent]
    });
    fixture = TestBed.createComponent(HeaderUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
