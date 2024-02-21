import { ComponentFixture, TestBed } from '@angular/core/testing';

import { honorverseBooksPageComponent } from './honorverseBooks-page.component';

describe('honorverseBooksPageComponent', () => {
  let component: honorverseBooksPageComponent;
  let fixture: ComponentFixture<honorverseBooksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [honorverseBooksPageComponent]
    });
    fixture = TestBed.createComponent(honorverseBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
