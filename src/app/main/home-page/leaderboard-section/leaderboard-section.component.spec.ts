import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { LeaderboardSectionComponent } from './leaderboard-section.component';

describe('LeaderboardSectionComponent', () => {
  let component: LeaderboardSectionComponent;
  let fixture: ComponentFixture<LeaderboardSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports:[HttpModule,RouterTestingModule],
      declarations: [ LeaderboardSectionComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
