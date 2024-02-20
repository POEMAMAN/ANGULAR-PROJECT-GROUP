import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldManWarPlanetsComponent } from './old-man-war-planets.component';

describe('OldManWarPlanetsComponent', () => {
  let component: OldManWarPlanetsComponent;
  let fixture: ComponentFixture<OldManWarPlanetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OldManWarPlanetsComponent]
    });
    fixture = TestBed.createComponent(OldManWarPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
