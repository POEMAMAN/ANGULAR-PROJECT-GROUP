import { ComponentFixture, TestBed } from '@angular/core/testing';

import { honorverseCharactersComponent } from './honorverseCharacters.component';

describe('honorverseCharactersComponent', () => {
  let component: honorverseCharactersComponent;
  let fixture: ComponentFixture<honorverseCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [honorverseCharactersComponent]
    });
    fixture = TestBed.createComponent(honorverseCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
