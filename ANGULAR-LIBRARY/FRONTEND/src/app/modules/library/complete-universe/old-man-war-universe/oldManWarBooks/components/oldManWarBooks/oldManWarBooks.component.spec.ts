import { ComponentFixture, TestBed } from '@angular/core/testing';

import { oldManWarBooksComponent } from './oldManWarBooks.component';

describe('oldManWarBooksComponent', () => {
  let component: oldManWarBooksComponent;
  let fixture: ComponentFixture<oldManWarBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [oldManWarBooksComponent]
    });
    fixture = TestBed.createComponent(oldManWarBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
