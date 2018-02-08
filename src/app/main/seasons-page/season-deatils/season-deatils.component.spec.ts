import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { SeasonDeatilsComponent } from './season-deatils.component';
import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
describe('SeasonDeatilsComponent', () => {
  let component: SeasonDeatilsComponent;
  let fixture: ComponentFixture<SeasonDeatilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       schemas:[CUSTOM_ELEMENTS_SCHEMA],
         imports:[HttpModule,RouterTestingModule,NgxPaginationModule],
      declarations: [ SeasonDeatilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
