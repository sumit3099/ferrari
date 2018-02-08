import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { UserDetailService } from './user-detail.service';
import { Http } from "@angular/http";
describe('UserDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports:[HttpModule],
      providers: [UserDetailService]
    });
  });

  it('should be created', inject([UserDetailService], (service: UserDetailService) => {
    expect(service).toBeTruthy();
  }));

  it('should have updatePoints function',
  inject([UserDetailService], (service: UserDetailService) => {
    expect(service.updatePoints).toBeTruthy();
  }));
});
