import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SagasComponent } from './sagas.component';

describe('SagasComponent', () => {
  let component: SagasComponent;
  let fixture: ComponentFixture<SagasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SagasComponent]
    });
    fixture = TestBed.createComponent(SagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
