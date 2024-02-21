import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpliftBooksComponent } from './upliftBooks.component';

describe('UpliftBooksComponent', () => {
  let component: UpliftBooksComponent;
  let fixture: ComponentFixture<UpliftBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpliftBooksComponent]
    });
    fixture = TestBed.createComponent(UpliftBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
