import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltraW40KCharactersComponent } from './UltraW40KCharacters.component';

describe('UltraW40KCharactersComponent', () => {
  let component: UltraW40KCharactersComponent;
  let fixture: ComponentFixture<UltraW40KCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UltraW40KCharactersComponent]
    });
    fixture = TestBed.createComponent(UltraW40KCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
