import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoarewetowComponent } from './whoarewetow.component';

describe('WhoarewetowComponent', () => {
  let component: WhoarewetowComponent;
  let fixture: ComponentFixture<WhoarewetowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoarewetowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoarewetowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
