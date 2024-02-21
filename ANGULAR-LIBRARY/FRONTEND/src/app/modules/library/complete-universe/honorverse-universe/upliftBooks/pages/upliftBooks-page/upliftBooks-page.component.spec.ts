import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpliftBooksPageComponent } from './upliftBooks-page.component';

describe('UpliftBooksPageComponent', () => {
  let component: UpliftBooksPageComponent;
  let fixture: ComponentFixture<UpliftBooksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpliftBooksPageComponent]
    });
    fixture = TestBed.createComponent(UpliftBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
