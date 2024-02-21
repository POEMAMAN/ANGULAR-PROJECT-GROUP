import { ComponentFixture, TestBed } from '@angular/core/testing';

import { oldManWarBooksPageComponent } from './oldManWarBooks-page.component';

describe('oldManWarBooksPageComponent', () => {
  let component: oldManWarBooksPageComponent;
  let fixture: ComponentFixture<oldManWarBooksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [oldManWarBooksPageComponent]
    });
    fixture = TestBed.createComponent(oldManWarBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
