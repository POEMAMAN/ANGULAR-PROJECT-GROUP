import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpanseCharactersComponent } from './expanse-characters.component';

describe('ExpanseCharactersComponent', () => {
  let component: ExpanseCharactersComponent;
  let fixture: ComponentFixture<ExpanseCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpanseCharactersComponent]
    });
    fixture = TestBed.createComponent(ExpanseCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
