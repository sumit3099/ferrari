import { Injectable } from '@angular/core';

import {AdalService} from 'ng2-adal/dist/core';
import {Observable} from 'rxjs';
@Injectable()
export class AuthService {

  constructor(private adalService: AdalService) { }

  public getToken(): Observable<string> {
        return this.adalService.acquireToken("https://login.microsoftonline.com").map(
            token => token.toString()
        );
    }
}
