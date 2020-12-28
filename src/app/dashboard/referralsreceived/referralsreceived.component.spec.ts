import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralsreceivedComponent } from './referralsreceived.component';

describe('ReferralsreceivedComponent', () => {
  let component: ReferralsreceivedComponent;
  let fixture: ComponentFixture<ReferralsreceivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralsreceivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralsreceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
