import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldManWarCountriesComponent } from './old-man-war-countries.component';

describe('OldManWarCountriesComponent', () => {
  let component: OldManWarCountriesComponent;
  let fixture: ComponentFixture<OldManWarCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OldManWarCountriesComponent]
    });
    fixture = TestBed.createComponent(OldManWarCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
