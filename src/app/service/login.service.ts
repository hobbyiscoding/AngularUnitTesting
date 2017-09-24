import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

  public login(username:string, password:string):boolean {
    return true;
  }
}
