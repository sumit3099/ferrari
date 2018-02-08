import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { TestStadiumComponent } from './test-stadium.component';
import { UserDetailService } from "./../../services/user-detail.service";
import { RouterTestingModule } from '@angular/router/testing';
describe('TestStadiumComponent', () => {
  let component: TestStadiumComponent;
  let fixture: ComponentFixture<TestStadiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
          imports:[HttpModule,RouterTestingModule],
      declarations: [ TestStadiumComponent ],
         providers: [ UserDetailService]
    })
    .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(TestStadiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
