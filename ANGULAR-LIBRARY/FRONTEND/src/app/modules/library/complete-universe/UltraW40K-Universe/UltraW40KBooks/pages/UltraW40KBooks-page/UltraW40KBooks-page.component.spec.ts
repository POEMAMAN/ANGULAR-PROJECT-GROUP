import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltraW40KBooksPageComponent } from './UltraW40KBooks-page.component';

describe('UltraW40KBooksPageComponent', () => {
  let component: UltraW40KBooksPageComponent;
  let fixture: ComponentFixture<UltraW40KBooksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UltraW40KBooksPageComponent]
    });
    fixture = TestBed.createComponent(UltraW40KBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
