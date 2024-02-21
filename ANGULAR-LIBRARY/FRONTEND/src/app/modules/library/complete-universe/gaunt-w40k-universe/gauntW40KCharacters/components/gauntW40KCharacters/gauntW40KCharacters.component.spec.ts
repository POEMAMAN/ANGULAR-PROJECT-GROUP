import { ComponentFixture, TestBed } from '@angular/core/testing';

import { gauntW40KCharactersComponent } from './gauntW40KCharacters.component';

describe('gauntW40KCharactersComponent', () => {
  let component: gauntW40KCharactersComponent;
  let fixture: ComponentFixture<gauntW40KCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [gauntW40KCharactersComponent]
    });
    fixture = TestBed.createComponent(gauntW40KCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
