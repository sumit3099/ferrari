import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F1HistoryPageComponent } from './f1-history-page.component';

describe('F1HistoryPageComponent', () => {
  let component: F1HistoryPageComponent;
  let fixture: ComponentFixture<F1HistoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F1HistoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F1HistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
