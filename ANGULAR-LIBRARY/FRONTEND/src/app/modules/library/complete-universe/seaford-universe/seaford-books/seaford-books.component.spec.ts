import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeafordBooksComponent } from './seaford-books.component';

describe('SeafordBooksComponent', () => {
  let component: SeafordBooksComponent;
  let fixture: ComponentFixture<SeafordBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeafordBooksComponent]
    });
    fixture = TestBed.createComponent(SeafordBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
