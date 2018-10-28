import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleUserComponent } from './google-user.component';

describe('GoogleUserComponent', () => {
  let component: GoogleUserComponent;
  let fixture: ComponentFixture<GoogleUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
