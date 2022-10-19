import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STUDIESComponent } from './studies.component';

describe('STUDIESComponent', () => {
  let component: STUDIESComponent;
  let fixture: ComponentFixture<STUDIESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STUDIESComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STUDIESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
