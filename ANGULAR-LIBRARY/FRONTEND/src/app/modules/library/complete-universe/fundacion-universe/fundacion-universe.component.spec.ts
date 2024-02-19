import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundacionUniverseComponent } from './fundacion-universe.component';

describe('FundacionUniverseComponent', () => {
  let component: FundacionUniverseComponent;
  let fixture: ComponentFixture<FundacionUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FundacionUniverseComponent]
    });
    fixture = TestBed.createComponent(FundacionUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
