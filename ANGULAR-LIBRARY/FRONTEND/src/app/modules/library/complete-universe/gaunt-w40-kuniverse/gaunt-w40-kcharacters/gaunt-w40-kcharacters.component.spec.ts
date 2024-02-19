import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GauntW40KCharactersComponent } from './gaunt-w40-kcharacters.component';

describe('GauntW40KCharactersComponent', () => {
  let component: GauntW40KCharactersComponent;
  let fixture: ComponentFixture<GauntW40KCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GauntW40KCharactersComponent]
    });
    fixture = TestBed.createComponent(GauntW40KCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
