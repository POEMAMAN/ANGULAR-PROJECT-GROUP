import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalacticCenterBooksComponent } from './galactic-center-books.component';

describe('GalacticCenterBooksComponent', () => {
  let component: GalacticCenterBooksComponent;
  let fixture: ComponentFixture<GalacticCenterBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalacticCenterBooksComponent]
    });
    fixture = TestBed.createComponent(GalacticCenterBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
