import { ComponentFixture, TestBed } from '@angular/core/testing';

import { galacticCentCharactersPageComponent } from './galacticCentCharacters-page.component';

describe('galacticCentCharactersPageComponent', () => {
  let component: galacticCentCharactersPageComponent;
  let fixture: ComponentFixture<galacticCentCharactersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [galacticCentCharactersPageComponent]
    });
    fixture = TestBed.createComponent(galacticCentCharactersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
