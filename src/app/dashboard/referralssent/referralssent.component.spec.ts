import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralssentComponent } from './referralssent.component';

describe('ReferralssentComponent', () => {
  let component: ReferralssentComponent;
  let fixture: ComponentFixture<ReferralssentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralssentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralssentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
