import { ComponentFixture, TestBed } from '@angular/core/testing';

import { seafordCharactersComponent } from './seafordCharacters.component';

describe('seafordCharactersComponent', () => {
  let component: seafordCharactersComponent;
  let fixture: ComponentFixture<seafordCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [seafordCharactersComponent]
    });
    fixture = TestBed.createComponent(seafordCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
