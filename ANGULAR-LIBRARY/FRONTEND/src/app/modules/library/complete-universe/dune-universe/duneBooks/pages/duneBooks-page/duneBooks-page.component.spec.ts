import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuneBooksPageComponent } from './duneBooks-page.component';

describe('DuneBooksPageComponent', () => {
  let component: DuneBooksPageComponent;
  let fixture: ComponentFixture<DuneBooksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DuneBooksPageComponent]
    });
    fixture = TestBed.createComponent(DuneBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
