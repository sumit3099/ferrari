import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { WinnersSectionComponent } from './winners-section.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('WinnersSectionComponent', () => {
  let component: WinnersSectionComponent;
  let fixture: ComponentFixture<WinnersSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports: [RouterTestingModule],
             schemas:[CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ WinnersSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
