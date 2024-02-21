import { ComponentFixture, TestBed } from '@angular/core/testing';

import { duneBooksPageComponent } from './duneBooks-page.component';

describe('duneBooksPageComponent', () => {
  let component: duneBooksPageComponent;
  let fixture: ComponentFixture<duneBooksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [duneBooksPageComponent]
    });
    fixture = TestBed.createComponent(duneBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
