import { ComponentFixture, TestBed } from '@angular/core/testing';

import { duneCharactersPageComponent } from './duneCharacters-page.component';

describe('duneCharactersPageComponent', () => {
  let component: duneCharactersPageComponent;
  let fixture: ComponentFixture<duneCharactersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [duneCharactersPageComponent]
    });
    fixture = TestBed.createComponent(duneCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
