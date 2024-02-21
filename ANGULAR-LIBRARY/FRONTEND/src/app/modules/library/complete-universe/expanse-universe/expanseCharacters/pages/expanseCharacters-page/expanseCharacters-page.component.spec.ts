import { ComponentFixture, TestBed } from '@angular/core/testing';

import { expanseCharactersPageComponent } from './expanseCharacters-page.component';

describe('expanseCharactersPageComponent', () => {
  let component: expanseCharactersPageComponent;
  let fixture: ComponentFixture<expanseCharactersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [expanseCharactersPageComponent]
    });
    fixture = TestBed.createComponent(expanseCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
