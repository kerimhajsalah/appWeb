import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Whatdewho2Component } from './whatdewho2.component';

describe('Whatdewho2Component', () => {
  let component: Whatdewho2Component;
  let fixture: ComponentFixture<Whatdewho2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Whatdewho2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Whatdewho2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
