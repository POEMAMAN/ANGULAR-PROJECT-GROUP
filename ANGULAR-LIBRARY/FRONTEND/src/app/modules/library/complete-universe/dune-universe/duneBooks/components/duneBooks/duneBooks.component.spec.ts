import { ComponentFixture, TestBed } from '@angular/core/testing';

import { duneBooksComponent } from './duneBooks.component';

describe('duneBooksComponent', () => {
  let component: duneBooksComponent;
  let fixture: ComponentFixture<duneBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [duneBooksComponent]
    });
    fixture = TestBed.createComponent(duneBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
