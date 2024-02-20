import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpliftCharactersComponent } from './uplift-characters.component';

describe('UpliftCharactersComponent', () => {
  let component: UpliftCharactersComponent;
  let fixture: ComponentFixture<UpliftCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpliftCharactersComponent]
    });
    fixture = TestBed.createComponent(UpliftCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
