import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoindocstimeComponent } from './joindocstime.component';

describe('JoindocstimeComponent', () => {
  let component: JoindocstimeComponent;
  let fixture: ComponentFixture<JoindocstimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoindocstimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoindocstimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
