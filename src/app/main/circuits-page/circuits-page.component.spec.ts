import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  RouterModule } from '@angular/router';
import { CircuitsPageComponent } from './circuits-page.component';
import { HttpModule } from '@angular/http';
describe('CircuitsPageComponent', () => {
  let component: CircuitsPageComponent;
  let fixture: ComponentFixture<CircuitsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterModule,HttpModule],
      declarations: [ CircuitsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
