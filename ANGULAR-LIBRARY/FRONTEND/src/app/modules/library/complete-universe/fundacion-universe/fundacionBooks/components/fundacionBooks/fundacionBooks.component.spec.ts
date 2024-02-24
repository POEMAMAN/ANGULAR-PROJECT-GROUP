import { ComponentFixture, TestBed } from '@angular/core/testing';

import { fundacionBooksComponent } from './fundacionBooks.component';

describe('fundacionBooksComponent', () => {
  let component: fundacionBooksComponent;
  let fixture: ComponentFixture<fundacionBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [fundacionBooksComponent]
    });
    fixture = TestBed.createComponent(fundacionBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
