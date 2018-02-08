import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartModule } from 'primeng/primeng';
import { TeamDetailsComponent } from './team-details.component';
import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterTestingModule} from '@angular/router/testing';
import { HttpModule } from '@angular/http';
describe('TeamDetailsComponent', () => {
  let component: TeamDetailsComponent;
  let fixture: ComponentFixture<TeamDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
          schemas:[CUSTOM_ELEMENTS_SCHEMA],
           imports:[ChartModule,NgxPaginationModule,RouterTestingModule,HttpModule],
      declarations: [ TeamDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
