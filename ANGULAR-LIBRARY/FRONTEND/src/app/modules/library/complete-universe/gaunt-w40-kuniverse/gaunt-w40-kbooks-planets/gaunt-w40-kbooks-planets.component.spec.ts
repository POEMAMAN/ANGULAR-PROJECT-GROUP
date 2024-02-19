import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GauntW40KBooksPlanetsComponent } from './gaunt-w40-kbooks-planets.component';

describe('GauntW40KBooksPlanetsComponent', () => {
  let component: GauntW40KBooksPlanetsComponent;
  let fixture: ComponentFixture<GauntW40KBooksPlanetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GauntW40KBooksPlanetsComponent]
    });
    fixture = TestBed.createComponent(GauntW40KBooksPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
