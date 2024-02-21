import { ComponentFixture, TestBed } from '@angular/core/testing';

import { expanseBooksPageComponent } from './expanseBooks-page.component';

describe('expanseBooksPageComponent', () => {
  let component: expanseBooksPageComponent;
  let fixture: ComponentFixture<expanseBooksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [expanseBooksPageComponent]
    });
    fixture = TestBed.createComponent(expanseBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
