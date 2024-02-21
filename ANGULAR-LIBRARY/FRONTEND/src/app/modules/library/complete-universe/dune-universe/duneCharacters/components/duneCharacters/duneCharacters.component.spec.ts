import { ComponentFixture, TestBed } from '@angular/core/testing';

import { duneCharactersComponent } from './duneCharacters.component';

describe('duneCharactersComponent', () => {
  let component: duneCharactersComponent;
  let fixture: ComponentFixture<duneCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [duneCharactersComponent]
    });
    fixture = TestBed.createComponent(duneCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
