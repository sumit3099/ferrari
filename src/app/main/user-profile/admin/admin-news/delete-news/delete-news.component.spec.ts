import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { DeleteNewsComponent } from './delete-news.component';
import { HttpModule } from '@angular/http';
describe('DeleteNewsComponent', () => {
  let component: DeleteNewsComponent;
  let fixture: ComponentFixture<DeleteNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports:[HttpModule,RouterTestingModule],
      declarations: [ DeleteNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
