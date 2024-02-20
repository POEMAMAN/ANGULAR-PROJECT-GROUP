import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SagasPageComponent } from './sagas-page.component';

describe('SagasPageComponent', () => {
  let component: SagasPageComponent;
  let fixture: ComponentFixture<SagasPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SagasPageComponent]
    });
    fixture = TestBed.createComponent(SagasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
