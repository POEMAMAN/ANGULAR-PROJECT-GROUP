import { ComponentFixture, TestBed } from '@angular/core/testing';

import { gauntW40KCharactersPageComponent } from './gauntW40KCharacters-page.component';

describe('gauntW40KCharactersPageComponent', () => {
  let component: gauntW40KCharactersPageComponent;
  let fixture: ComponentFixture<gauntW40KCharactersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [gauntW40KCharactersPageComponent]
    });
    fixture = TestBed.createComponent(gauntW40KCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
