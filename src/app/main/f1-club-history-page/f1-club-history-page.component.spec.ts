import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F1ClubHistoryPageComponent } from './f1-club-history-page.component';

describe('F1ClubHistoryPageComponent', () => {
  let component: F1ClubHistoryPageComponent;
  let fixture: ComponentFixture<F1ClubHistoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F1ClubHistoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F1ClubHistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
