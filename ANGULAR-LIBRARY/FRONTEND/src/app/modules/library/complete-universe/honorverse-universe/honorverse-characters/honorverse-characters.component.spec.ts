import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonorverseCharactersComponent } from './honorverse-characters.component';

describe('HonorverseCharactersComponent', () => {
  let component: HonorverseCharactersComponent;
  let fixture: ComponentFixture<HonorverseCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HonorverseCharactersComponent]
    });
    fixture = TestBed.createComponent(HonorverseCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
