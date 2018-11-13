import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NickAndAvatarComponent } from './nick-and-avatar.component';

describe('NickAndAvatarComponent', () => {
  let component: NickAndAvatarComponent;
  let fixture: ComponentFixture<NickAndAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NickAndAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NickAndAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
