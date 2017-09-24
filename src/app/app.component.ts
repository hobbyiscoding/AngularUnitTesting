import { LoginService } from './service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent{

  constructor(private loginService: LoginService){}

  isAuthenticated():boolean {
    return this.loginService.login('username', 'password');
  }

}
