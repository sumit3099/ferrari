import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms'
import { UploadVedioComponent } from './upload-vedio.component';
import { HttpModule } from '@angular/http';
describe('UploadVedioComponent', () => {
  let component: UploadVedioComponent;
  let fixture: ComponentFixture<UploadVedioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,HttpModule],
      declarations: [ UploadVedioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadVedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
