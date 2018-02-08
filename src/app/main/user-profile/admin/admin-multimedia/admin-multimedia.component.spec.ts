import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AdminMultimediaComponent } from './admin-multimedia.component';

describe('AdminMultimediaComponent', () => {
  let component: AdminMultimediaComponent;
  let fixture: ComponentFixture<AdminMultimediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        schemas:[CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ AdminMultimediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
