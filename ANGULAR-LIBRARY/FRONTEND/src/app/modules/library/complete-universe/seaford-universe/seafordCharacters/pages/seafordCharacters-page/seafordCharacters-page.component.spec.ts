import { ComponentFixture, TestBed } from '@angular/core/testing';

import { seafordCharactersPageComponent } from './seafordCharacters-page.component';

describe('seafordCharactersPageComponent', () => {
  let component: seafordCharactersPageComponent;
  let fixture: ComponentFixture<seafordCharactersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [seafordCharactersPageComponent]
    });
    fixture = TestBed.createComponent(seafordCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
