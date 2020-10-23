import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbrMissionUpComComponent } from './nbr-mission-up-com.component';

describe('NbrMissionUpComComponent', () => {
  let component: NbrMissionUpComComponent;
  let fixture: ComponentFixture<NbrMissionUpComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbrMissionUpComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbrMissionUpComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
