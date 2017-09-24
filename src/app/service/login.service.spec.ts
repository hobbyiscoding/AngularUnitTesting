import { LoginService } from './login.service';

xdescribe('LoginService', () => {
  let loginService: LoginService;

  beforeEach(() => {
    loginService = new LoginService();
  });

  it(`should test login method to return true`, () => {
    expect(loginService.login('username', 'password')).toBeTruthy();
  });
});
