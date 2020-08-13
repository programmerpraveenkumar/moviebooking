import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectshowComponent } from './selectshow.component';

describe('SelectshowComponent', () => {
  let component: SelectshowComponent;
  let fixture: ComponentFixture<SelectshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
