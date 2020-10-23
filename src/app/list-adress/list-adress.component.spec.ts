import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdressComponent } from './list-adress.component';

describe('ListAdressComponent', () => {
  let component: ListAdressComponent;
  let fixture: ComponentFixture<ListAdressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAdressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
