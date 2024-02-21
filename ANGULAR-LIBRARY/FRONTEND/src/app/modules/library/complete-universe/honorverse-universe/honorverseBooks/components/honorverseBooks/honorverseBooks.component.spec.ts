import { ComponentFixture, TestBed } from '@angular/core/testing';

import { honorverseBooksComponent } from './honorverseBooks.component';

describe('honorverseBooksComponent', () => {
  let component: honorverseBooksComponent;
  let fixture: ComponentFixture<honorverseBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [honorverseBooksComponent]
    });
    fixture = TestBed.createComponent(honorverseBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
