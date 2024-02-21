import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltraW40KCharactersPageComponent } from './UltraW40KCharacters-page.component';

describe('UltraW40KCharactersPageComponent', () => {
  let component: UltraW40KCharactersPageComponent;
  let fixture: ComponentFixture<UltraW40KCharactersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UltraW40KCharactersPageComponent]
    });
    fixture = TestBed.createComponent(UltraW40KCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
