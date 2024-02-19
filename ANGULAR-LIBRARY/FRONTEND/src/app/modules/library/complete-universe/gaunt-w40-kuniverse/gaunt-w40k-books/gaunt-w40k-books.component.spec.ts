import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GauntW40KBooksComponent } from './gaunt-w40k-books.component';

describe('GauntW40KBooksComponent', () => {
  let component: GauntW40KBooksComponent;
  let fixture: ComponentFixture<GauntW40KBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GauntW40KBooksComponent]
    });
    fixture = TestBed.createComponent(GauntW40KBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
