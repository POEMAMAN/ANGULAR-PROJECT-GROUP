import { ComponentFixture, TestBed } from '@angular/core/testing';

import { forEverWarCharactersPageComponent } from './forEverWarCharacters-page.component';

describe('forEverWarCharactersPageComponent', () => {
  let component: forEverWarCharactersPageComponent;
  let fixture: ComponentFixture<forEverWarCharactersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [forEverWarCharactersPageComponent]
    });
    fixture = TestBed.createComponent(forEverWarCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
