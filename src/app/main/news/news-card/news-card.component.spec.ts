import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterTestingModule} from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { NewsCardComponent } from './news-card.component';
import { NgxPaginationModule } from 'ngx-pagination';
describe('NewsCardComponent', () => {
  let component: NewsCardComponent;
  let fixture: ComponentFixture<NewsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
         schemas:[CUSTOM_ELEMENTS_SCHEMA],
     imports:[HttpModule,RouterTestingModule,NgxPaginationModule],
      declarations: [ NewsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
