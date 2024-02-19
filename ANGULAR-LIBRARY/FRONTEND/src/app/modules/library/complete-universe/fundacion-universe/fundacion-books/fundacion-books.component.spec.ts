import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundacionBooksComponent } from './fundacion-books.component';

describe('FundacionBooksComponent', () => {
  let component: FundacionBooksComponent;
  let fixture: ComponentFixture<FundacionBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FundacionBooksComponent]
    });
    fixture = TestBed.createComponent(FundacionBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
