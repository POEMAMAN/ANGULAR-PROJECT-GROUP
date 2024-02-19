import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalacticCenterComponent } from './galactic-center.component';

describe('GalacticCenterComponent', () => {
  let component: GalacticCenterComponent;
  let fixture: ComponentFixture<GalacticCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalacticCenterComponent]
    });
    fixture = TestBed.createComponent(GalacticCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
