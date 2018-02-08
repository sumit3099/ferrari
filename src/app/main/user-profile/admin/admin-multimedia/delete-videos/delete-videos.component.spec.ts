import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { DeleteVideosComponent } from './delete-videos.component';
import { RouterTestingModule} from '@angular/router/testing';
describe('DeleteVideosComponent', () => {
  let component: DeleteVideosComponent;
  let fixture: ComponentFixture<DeleteVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
   imports:[HttpModule,RouterTestingModule],
      declarations: [ DeleteVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
