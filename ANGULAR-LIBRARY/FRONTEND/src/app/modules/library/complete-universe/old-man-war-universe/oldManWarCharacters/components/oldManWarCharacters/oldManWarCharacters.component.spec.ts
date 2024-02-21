import { ComponentFixture, TestBed } from '@angular/core/testing';

import { oldManWarCharactersComponent } from './oldManWarCharacters.component';

describe('oldManWarCharactersComponent', () => {
  let component: oldManWarCharactersComponent;
  let fixture: ComponentFixture<oldManWarCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [oldManWarCharactersComponent]
    });
    fixture = TestBed.createComponent(oldManWarCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
