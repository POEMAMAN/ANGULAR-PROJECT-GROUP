import { ComponentFixture, TestBed } from '@angular/core/testing';

import { seafordBooksPageComponent } from './seafordBooks-page.component';

describe('seafordBooksPageComponent', () => {
  let component: seafordBooksPageComponent;
  let fixture: ComponentFixture<seafordBooksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [seafordBooksPageComponent]
    });
    fixture = TestBed.createComponent(seafordBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
