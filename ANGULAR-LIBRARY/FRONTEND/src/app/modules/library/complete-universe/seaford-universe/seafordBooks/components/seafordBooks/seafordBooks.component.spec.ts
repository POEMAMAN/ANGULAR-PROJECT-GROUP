import { ComponentFixture, TestBed } from '@angular/core/testing';

import { seafordBooksComponent } from './seafordBooks.component';

describe('seafordBooksComponent', () => {
  let component: seafordBooksComponent;
  let fixture: ComponentFixture<seafordBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [seafordBooksComponent]
    });
    fixture = TestBed.createComponent(seafordBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
