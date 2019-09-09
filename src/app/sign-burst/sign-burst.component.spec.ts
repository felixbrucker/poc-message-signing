import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignBurstComponent } from './sign-burst.component';

describe('SignBurstComponent', () => {
  let component: SignBurstComponent;
  let fixture: ComponentFixture<SignBurstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignBurstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignBurstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
