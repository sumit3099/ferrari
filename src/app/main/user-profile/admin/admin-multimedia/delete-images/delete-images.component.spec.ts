import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpModule} from '@angular/http';
import { DeleteImagesComponent } from './delete-images.component';
import { RouterTestingModule} from '@angular/router/testing';
describe('DeleteImagesComponent', () => {
  let component: DeleteImagesComponent;
  let fixture: ComponentFixture<DeleteImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteImagesComponent ],
             imports:[HttpModule,RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
