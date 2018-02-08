import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ImagesComponent } from './images.component';
//import { DomSanitizer } from '@angular/platform-browser';
import { CeiboShare } from 'ng2-social-share';
describe('ImagesComponent', () => {
  let component: ImagesComponent;
  let fixture: ComponentFixture<ImagesComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[CeiboShare],
       schemas:[CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ ImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
