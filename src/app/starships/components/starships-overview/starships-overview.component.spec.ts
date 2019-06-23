import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsOverviewComponent } from './starships-overview.component';

describe('StarshipsOverviewComponent', () => {
  let component: StarshipsOverviewComponent;
  let fixture: ComponentFixture<StarshipsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarshipsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
