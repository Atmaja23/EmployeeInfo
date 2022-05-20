import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeeByIdComponent } from './view-employee-by-id.component';

describe('ViewEmployeeByIdComponent', () => {
  let component: ViewEmployeeByIdComponent;
  let fixture: ComponentFixture<ViewEmployeeByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmployeeByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmployeeByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
