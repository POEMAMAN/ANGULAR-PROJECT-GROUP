import { ComponentFixture, TestBed } from '@angular/core/testing';

import { forEverWarBooksComponent } from './forEverWarBooks.component';

describe('forEverWarBooksComponent', () => {
  let component: forEverWarBooksComponent;
  let fixture: ComponentFixture<forEverWarBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [forEverWarBooksComponent]
    });
    fixture = TestBed.createComponent(forEverWarBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
