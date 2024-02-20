import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLogoutComponent } from './header-logout.component';

describe('HeaderLogoutComponent', () => {
  let component: HeaderLogoutComponent;
  let fixture: ComponentFixture<HeaderLogoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderLogoutComponent]
    });
    fixture = TestBed.createComponent(HeaderLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
