import { ComponentFixture, TestBed } from '@angular/core/testing';

import { gauntW40KBooksPageComponent } from './gauntW40KBooks-page.component';

describe('gauntW40KBooksPageComponent', () => {
  let component: gauntW40KBooksPageComponent;
  let fixture: ComponentFixture<gauntW40KBooksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [gauntW40KBooksPageComponent]
    });
    fixture = TestBed.createComponent(gauntW40KBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
