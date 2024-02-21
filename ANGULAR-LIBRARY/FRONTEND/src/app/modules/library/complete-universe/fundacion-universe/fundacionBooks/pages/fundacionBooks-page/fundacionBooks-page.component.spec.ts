import { ComponentFixture, TestBed } from '@angular/core/testing';

import { fundacionBooksPageComponent } from './fundacionBooks-page.component';

describe('fundacionBooksPageComponent', () => {
  let component: fundacionBooksPageComponent;
  let fixture: ComponentFixture<fundacionBooksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [fundacionBooksPageComponent]
    });
    fixture = TestBed.createComponent(fundacionBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
