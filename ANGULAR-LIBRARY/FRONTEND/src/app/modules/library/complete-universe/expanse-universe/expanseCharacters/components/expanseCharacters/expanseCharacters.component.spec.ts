import { ComponentFixture, TestBed } from '@angular/core/testing';

import { expanseCharactersComponent } from './expanseCharacters.component';

describe('expanseCharactersComponent', () => {
  let component: expanseCharactersComponent;
  let fixture: ComponentFixture<expanseCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [expanseCharactersComponent]
    });
    fixture = TestBed.createComponent(expanseCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
