import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldManWarBooksComponent } from './old-man-war-books.component';

describe('OldManWarBooksComponent', () => {
  let component: OldManWarBooksComponent;
  let fixture: ComponentFixture<OldManWarBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OldManWarBooksComponent]
    });
    fixture = TestBed.createComponent(OldManWarBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
