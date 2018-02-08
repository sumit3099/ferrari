import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailService } from "./../../../../services/user-detail.service";
import { EventDetailsComponent } from './event-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
describe('EventDetailsComponent', () => {
  let component: EventDetailsComponent;
  let fixture: ComponentFixture<EventDetailsComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports:[AgmCoreModule,RouterTestingModule,HttpModule],
      declarations: [ EventDetailsComponent ],
       providers: [UserDetailService]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
