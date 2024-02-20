import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeafordCharactersComponent } from './seaford-characters.component';

describe('SeafordCharactersComponent', () => {
  let component: SeafordCharactersComponent;
  let fixture: ComponentFixture<SeafordCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeafordCharactersComponent]
    });
    fixture = TestBed.createComponent(SeafordCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
