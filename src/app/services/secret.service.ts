import { Injectable } from '@angular/core';

@Injectable()
export class SecretService {

  constructor() { }
  
  public get adalConfig(): any {
    return {
      tenant: '85c997b9-f494-46b3-a11d-772983cf6f11',
      clientId: '5b8792ae-493d-4ad9-b188-6264b1d2f01d',
      redirectUri: window.location.origin + '',
      postLogoutRedirectUri: window.location.origin + ''
    };
  }
}
