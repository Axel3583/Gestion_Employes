import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployesDashComponent } from './employes-dash.component';

describe('EmployesDashComponent', () => {
  let component: EmployesDashComponent;
  let fixture: ComponentFixture<EmployesDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployesDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployesDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
