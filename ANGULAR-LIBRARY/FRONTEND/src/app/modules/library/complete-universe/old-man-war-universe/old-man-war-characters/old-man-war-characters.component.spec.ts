import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldManWarCharactersComponent } from './old-man-war-characters.component';

describe('OldManWarCharactersComponent', () => {
  let component: OldManWarCharactersComponent;
  let fixture: ComponentFixture<OldManWarCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OldManWarCharactersComponent]
    });
    fixture = TestBed.createComponent(OldManWarCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
