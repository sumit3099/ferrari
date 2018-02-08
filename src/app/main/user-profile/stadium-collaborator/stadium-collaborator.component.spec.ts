import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { StadiumCollaboratorComponent } from './stadium-collaborator.component';
import { UserDetailService } from "./../../../services/user-detail.service";
import { RouterTestingModule} from '@angular/router/testing';

describe('StadiumCollaboratorComponent', () => {
  let component: StadiumCollaboratorComponent;
  let fixture: ComponentFixture<StadiumCollaboratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[HttpModule,RouterTestingModule],
         providers: [UserDetailService],
      declarations: [ StadiumCollaboratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StadiumCollaboratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
