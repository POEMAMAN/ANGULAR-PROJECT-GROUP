import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonorversePlanetsComponent } from './honorverse-planets.component';

describe('HonorversePlanetsComponent', () => {
  let component: HonorversePlanetsComponent;
  let fixture: ComponentFixture<HonorversePlanetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HonorversePlanetsComponent]
    });
    fixture = TestBed.createComponent(HonorversePlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
