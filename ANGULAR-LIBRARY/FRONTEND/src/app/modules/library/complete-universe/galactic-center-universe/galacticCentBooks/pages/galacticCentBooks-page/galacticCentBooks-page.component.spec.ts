import { ComponentFixture, TestBed } from '@angular/core/testing';

import { galacticCentBooksPageComponent } from './galacticCentBooks-page.component';

describe('galacticCentBooksPageComponent', () => {
  let component: galacticCentBooksPageComponent;
  let fixture: ComponentFixture<galacticCentBooksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [galacticCentBooksPageComponent]
    });
    fixture = TestBed.createComponent(galacticCentBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
