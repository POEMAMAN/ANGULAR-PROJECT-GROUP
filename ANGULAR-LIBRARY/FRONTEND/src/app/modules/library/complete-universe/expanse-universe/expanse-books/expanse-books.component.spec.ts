import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpanseBooksComponent } from './expanse-books.component';

describe('ExpanseBooksComponent', () => {
  let component: ExpanseBooksComponent;
  let fixture: ComponentFixture<ExpanseBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpanseBooksComponent]
    });
    fixture = TestBed.createComponent(ExpanseBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
