import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { UserProfileComponent } from './user-profile.component';
import {AdalService} from "ng2-adal/dist/services/adal.service";
import { AuthService } from "../../services/auth.service";
import { UserDetailService } from './../../services/user-detail.service';
import { HttpModule } from '@angular/http';
describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports:[RouterTestingModule,HttpModule],
      declarations: [ UserProfileComponent ],
       providers: [AdalService,AuthService,UserDetailService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
