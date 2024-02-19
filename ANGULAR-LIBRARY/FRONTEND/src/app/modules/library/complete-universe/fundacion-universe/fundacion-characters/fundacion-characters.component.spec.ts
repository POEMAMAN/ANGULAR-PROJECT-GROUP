import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundacionCharactersComponent } from './fundacion-characters.component';

describe('FundacionCharactersComponent', () => {
  let component: FundacionCharactersComponent;
  let fixture: ComponentFixture<FundacionCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FundacionCharactersComponent]
    });
    fixture = TestBed.createComponent(FundacionCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
