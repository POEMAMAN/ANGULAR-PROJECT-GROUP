import { ComponentFixture, TestBed } from '@angular/core/testing';

import { galacticCentBooksComponent } from './galacticCentBooks.component';

describe('galacticCentBooksComponent', () => {
  let component: galacticCentBooksComponent;
  let fixture: ComponentFixture<galacticCentBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [galacticCentBooksComponent]
    });
    fixture = TestBed.createComponent(galacticCentBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
