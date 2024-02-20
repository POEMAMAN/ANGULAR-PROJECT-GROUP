import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonorverseUniverseComponent } from './honorverse-universe.component';

describe('HonorverseUniverseComponent', () => {
  let component: HonorverseUniverseComponent;
  let fixture: ComponentFixture<HonorverseUniverseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HonorverseUniverseComponent]
    });
    fixture = TestBed.createComponent(HonorverseUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
