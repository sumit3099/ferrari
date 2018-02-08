import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { DcardComponent } from './dcard.component';
import { HttpModule } from '@angular/http';
import { RouterTestingModule} from '@angular/router/testing';
describe('DcardComponent', () => {
  let component: DcardComponent;
  let fixture: ComponentFixture<DcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports:[HttpModule,RouterTestingModule],
       schemas:[CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ DcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
