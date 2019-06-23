import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartshipsDetailComponent } from './startships-detail.component';

describe('StartshipsDetailComponent', () => {
  let component: StartshipsDetailComponent;
  let fixture: ComponentFixture<StartshipsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartshipsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartshipsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
