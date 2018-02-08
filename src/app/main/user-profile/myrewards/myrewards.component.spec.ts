import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailService } from "./../../../services/user-detail.service";
import { MyrewardsComponent } from './myrewards.component';
import { HttpModule } from '@angular/http';
describe('MyrewardsComponent', () => {
  let component: MyrewardsComponent;
  let fixture: ComponentFixture<MyrewardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[HttpModule],
       providers: [UserDetailService],
      declarations: [ MyrewardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyrewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
