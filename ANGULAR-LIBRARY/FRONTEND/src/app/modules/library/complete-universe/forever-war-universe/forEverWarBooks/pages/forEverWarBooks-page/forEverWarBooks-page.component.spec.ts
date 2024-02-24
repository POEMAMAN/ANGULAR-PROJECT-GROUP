import { ComponentFixture, TestBed } from '@angular/core/testing';

import { forEverWarBooksPageComponent } from './forEverWarBooks-page.component';

describe('forEverWarBooksPageComponent', () => {
  let component: forEverWarBooksPageComponent;
  let fixture: ComponentFixture<forEverWarBooksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [forEverWarBooksPageComponent]
    });
    fixture = TestBed.createComponent(forEverWarBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
