import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnemoviedetailComponent } from './onemoviedetail.component';

describe('OnemoviedetailComponent', () => {
  let component: OnemoviedetailComponent;
  let fixture: ComponentFixture<OnemoviedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnemoviedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnemoviedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
