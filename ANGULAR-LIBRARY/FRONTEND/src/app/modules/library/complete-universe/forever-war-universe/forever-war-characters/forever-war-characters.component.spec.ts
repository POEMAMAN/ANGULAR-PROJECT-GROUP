import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeverWarCharactersComponent } from './forever-war-characters.component';

describe('ForeverWarCharactersComponent', () => {
  let component: ForeverWarCharactersComponent;
  let fixture: ComponentFixture<ForeverWarCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForeverWarCharactersComponent]
    });
    fixture = TestBed.createComponent(ForeverWarCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
