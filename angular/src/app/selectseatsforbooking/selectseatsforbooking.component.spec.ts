import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectseatsforbookingComponent } from './selectseatsforbooking.component';

describe('SelectseatsforbookingComponent', () => {
  let component: SelectseatsforbookingComponent;
  let fixture: ComponentFixture<SelectseatsforbookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectseatsforbookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectseatsforbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
