import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpliftCharactersPageComponent } from './upliftCharacters-page.component';

describe('UpliftCharactersPageComponent', () => {
  let component: UpliftCharactersPageComponent;
  let fixture: ComponentFixture<UpliftCharactersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpliftCharactersPageComponent]
    });
    fixture = TestBed.createComponent(UpliftCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
