import { ComponentFixture, TestBed } from '@angular/core/testing';

import { expanseBooksComponent } from './expanseBooks.component';

describe('expanseBooksComponent', () => {
  let component: expanseBooksComponent;
  let fixture: ComponentFixture<expanseBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [expanseBooksComponent]
    });
    fixture = TestBed.createComponent(expanseBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
