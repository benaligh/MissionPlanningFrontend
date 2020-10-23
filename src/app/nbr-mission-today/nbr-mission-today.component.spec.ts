import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbrMissionTodayComponent } from './nbr-mission-today.component';

describe('NbrMissionTodayComponent', () => {
  let component: NbrMissionTodayComponent;
  let fixture: ComponentFixture<NbrMissionTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbrMissionTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbrMissionTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
