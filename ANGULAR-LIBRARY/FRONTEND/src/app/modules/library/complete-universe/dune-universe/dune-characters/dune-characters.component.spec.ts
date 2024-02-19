import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuneCharactersComponent } from './dune-characters.component';

describe('DuneCharactersComponent', () => {
  let component: DuneCharactersComponent;
  let fixture: ComponentFixture<DuneCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DuneCharactersComponent]
    });
    fixture = TestBed.createComponent(DuneCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
