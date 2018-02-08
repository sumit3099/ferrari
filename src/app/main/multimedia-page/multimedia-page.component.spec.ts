import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { MultimediaPageComponent } from './multimedia-page.component';
import { RouterTestingModule} from '@angular/router/testing';
describe('MultimediaPageComponent', () => {
  let component: MultimediaPageComponent;
  let fixture: ComponentFixture<MultimediaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ MultimediaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimediaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
