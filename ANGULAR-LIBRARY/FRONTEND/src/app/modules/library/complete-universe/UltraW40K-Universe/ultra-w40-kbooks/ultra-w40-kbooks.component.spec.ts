import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltraW40KBooksComponent } from './ultra-w40-kbooks.component';

describe('UltraW40KBooksComponent', () => {
  let component: UltraW40KBooksComponent;
  let fixture: ComponentFixture<UltraW40KBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UltraW40KBooksComponent]
    });
    fixture = TestBed.createComponent(UltraW40KBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
