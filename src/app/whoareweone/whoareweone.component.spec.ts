import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoareweoneComponent } from './whoareweone.component';

describe('WhoareweoneComponent', () => {
  let component: WhoareweoneComponent;
  let fixture: ComponentFixture<WhoareweoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoareweoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoareweoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
