import { ComponentFixture, TestBed } from '@angular/core/testing';

import { forEverWarCharactersComponent } from './forEverWarCharacters.component';

describe('forEverWarCharactersComponent', () => {
  let component: forEverWarCharactersComponent;
  let fixture: ComponentFixture<forEverWarCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [forEverWarCharactersComponent]
    });
    fixture = TestBed.createComponent(forEverWarCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
