import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeverWarBooksComponent } from './forever-war-books.component';

describe('ForeverWarBooksComponent', () => {
  let component: ForeverWarBooksComponent;
  let fixture: ComponentFixture<ForeverWarBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForeverWarBooksComponent]
    });
    fixture = TestBed.createComponent(ForeverWarBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
