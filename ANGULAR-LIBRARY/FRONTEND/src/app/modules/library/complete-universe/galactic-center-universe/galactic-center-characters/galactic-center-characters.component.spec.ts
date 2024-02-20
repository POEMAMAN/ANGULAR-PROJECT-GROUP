import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalacticCenterCharactersComponent } from './galactic-center-characters.component';

describe('GalacticCenterCharactersComponent', () => {
  let component: GalacticCenterCharactersComponent;
  let fixture: ComponentFixture<GalacticCenterCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalacticCenterCharactersComponent]
    });
    fixture = TestBed.createComponent(GalacticCenterCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
