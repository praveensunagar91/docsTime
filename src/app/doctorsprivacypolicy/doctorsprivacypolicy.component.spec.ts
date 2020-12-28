import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsprivacypolicyComponent } from './doctorsprivacypolicy.component';

describe('DoctorsprivacypolicyComponent', () => {
  let component: DoctorsprivacypolicyComponent;
  let fixture: ComponentFixture<DoctorsprivacypolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorsprivacypolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsprivacypolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
