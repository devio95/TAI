import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsMapsWeaponsComponent } from './stats-maps-weapons.component';

describe('StatsMapsWeaponsComponent', () => {
  let component: StatsMapsWeaponsComponent;
  let fixture: ComponentFixture<StatsMapsWeaponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsMapsWeaponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsMapsWeaponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
