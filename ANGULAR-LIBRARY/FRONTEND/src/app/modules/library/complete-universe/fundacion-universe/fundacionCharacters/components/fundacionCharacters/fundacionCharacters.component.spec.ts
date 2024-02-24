import { ComponentFixture, TestBed } from '@angular/core/testing';

import { fundacionCharactersComponent } from './fundacionCharacters.component';

describe('fundacionCharactersComponent', () => {
  let component: fundacionCharactersComponent;
  let fixture: ComponentFixture<fundacionCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [fundacionCharactersComponent]
    });
    fixture = TestBed.createComponent(fundacionCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
