import { ComponentFixture, TestBed } from '@angular/core/testing';

import { fundacionCharactersPageComponent } from './fundacionCharacters-page.component';

describe('fundacionCharactersPageComponent', () => {
  let component: fundacionCharactersPageComponent;
  let fixture: ComponentFixture<fundacionCharactersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [fundacionCharactersPageComponent]
    });
    fixture = TestBed.createComponent(fundacionCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
