import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignDiscComponent } from './sign-disc.component';

describe('SignBitcoinComponent', () => {
  let component: SignDiscComponent;
  let fixture: ComponentFixture<SignDiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignDiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignDiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
