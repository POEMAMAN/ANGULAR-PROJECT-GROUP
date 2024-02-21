import { ComponentFixture, TestBed } from '@angular/core/testing';

import { oldManWarCharactersPageComponent } from './oldManWarCharacters-page.component';

describe('oldManWarCharactersPageComponent', () => {
  let component: oldManWarCharactersPageComponent;
  let fixture: ComponentFixture<oldManWarCharactersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [oldManWarCharactersPageComponent]
    });
    fixture = TestBed.createComponent(oldManWarCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
