import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuneBooksComponent } from './dune-books.component';

describe('DuneBooksComponent', () => {
  let component: DuneBooksComponent;
  let fixture: ComponentFixture<DuneBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DuneBooksComponent]
    });
    fixture = TestBed.createComponent(DuneBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});