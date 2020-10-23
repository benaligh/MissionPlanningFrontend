import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMotoComponent } from './list-moto.component';

describe('ListMotoComponent', () => {
  let component: ListMotoComponent;
  let fixture: ComponentFixture<ListMotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
