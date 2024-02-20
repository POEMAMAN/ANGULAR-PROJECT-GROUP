import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversesPageComponent } from './universes-page.component';

describe('UniversesPageComponent', () => {
  let component: UniversesPageComponent;
  let fixture: ComponentFixture<UniversesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UniversesPageComponent]
    });
    fixture = TestBed.createComponent(UniversesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
