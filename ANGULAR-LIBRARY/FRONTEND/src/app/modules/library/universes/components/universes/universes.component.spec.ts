import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversesComponent } from './universes.component';

describe('UniversesComponent', () => {
  let component: UniversesComponent;
  let fixture: ComponentFixture<UniversesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UniversesComponent]
    });
    fixture = TestBed.createComponent(UniversesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
