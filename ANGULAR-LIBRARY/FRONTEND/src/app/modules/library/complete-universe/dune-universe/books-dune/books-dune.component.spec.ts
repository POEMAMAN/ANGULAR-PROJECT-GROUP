import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksDuneComponent } from './books-dune.component';

describe('BooksDuneComponent', () => {
  let component: BooksDuneComponent;
  let fixture: ComponentFixture<BooksDuneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksDuneComponent]
    });
    fixture = TestBed.createComponent(BooksDuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
