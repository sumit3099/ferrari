import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AgmCoreModule } from '@agm/core';
import { CircuitDetailsComponent } from './circuit-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
describe('CircuitDetailsComponent', () => {
  let component: CircuitDetailsComponent;
  let fixture: ComponentFixture<CircuitDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[AgmCoreModule,NgxPaginationModule,RouterTestingModule,HttpModule],
      declarations: [ CircuitDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
