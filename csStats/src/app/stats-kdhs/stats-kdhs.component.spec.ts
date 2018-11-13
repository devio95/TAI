import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsKDHSComponent } from './stats-kdhs.component';

describe('StatsKDHSComponent', () => {
  let component: StatsKDHSComponent;
  let fixture: ComponentFixture<StatsKDHSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsKDHSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsKDHSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
