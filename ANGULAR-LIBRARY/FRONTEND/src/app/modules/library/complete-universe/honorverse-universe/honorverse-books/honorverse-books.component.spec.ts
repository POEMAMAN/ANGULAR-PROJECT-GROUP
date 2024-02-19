import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonorverseBooksComponent } from './honorverse-books.component';

describe('HonorverseBooksComponent', () => {
  let component: HonorverseBooksComponent;
  let fixture: ComponentFixture<HonorverseBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HonorverseBooksComponent]
    });
    fixture = TestBed.createComponent(HonorverseBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
