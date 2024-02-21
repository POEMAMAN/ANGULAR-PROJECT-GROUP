import { ComponentFixture, TestBed } from '@angular/core/testing';

import { galacticCentCharactersComponent } from './galacticCentCharacters.component';

describe('galacticCentCharactersComponent', () => {
  let component: galacticCentCharactersComponent;
  let fixture: ComponentFixture<galacticCentCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [galacticCentCharactersComponent]
    });
    fixture = TestBed.createComponent(galacticCentCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
