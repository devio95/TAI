import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphsContainerComponent } from './graphs-container.component';

describe('GraphsContainerComponent', () => {
  let component: GraphsContainerComponent;
  let fixture: ComponentFixture<GraphsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
