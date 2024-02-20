import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderReturnLibraryComponent } from './header-return-library.component';

describe('HeaderReturnLibraryComponent', () => {
  let component: HeaderReturnLibraryComponent;
  let fixture: ComponentFixture<HeaderReturnLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderReturnLibraryComponent]
    });
    fixture = TestBed.createComponent(HeaderReturnLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
