import { ComponentFixture, TestBed } from '@angular/core/testing';

import { honorverseCharactersPageComponent } from './honorverseCharacters-page.component';

describe('honorverseCharactersPageComponent', () => {
  let component: honorverseCharactersPageComponent;
  let fixture: ComponentFixture<honorverseCharactersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [honorverseCharactersPageComponent]
    });
    fixture = TestBed.createComponent(honorverseCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
