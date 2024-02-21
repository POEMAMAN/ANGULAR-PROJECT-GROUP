import { ComponentFixture, TestBed } from '@angular/core/testing';

import { gauntW40KBooksComponent } from './gauntW40KBooks.component';

describe('gauntW40KBooksComponent', () => {
  let component: gauntW40KBooksComponent;
  let fixture: ComponentFixture<gauntW40KBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [gauntW40KBooksComponent]
    });
    fixture = TestBed.createComponent(gauntW40KBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
