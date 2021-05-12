import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeFroalaComponent } from './realtime-froala.component';

describe('RealtimeFroalaComponent', () => {
  let component: RealtimeFroalaComponent;
  let fixture: ComponentFixture<RealtimeFroalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealtimeFroalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimeFroalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
