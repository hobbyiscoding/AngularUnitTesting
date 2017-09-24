import { AppComponent } from './app.component';
import { LoginService } from './service/login.service';


describe(`it should test AppComponent`, () => {
    let loginService: LoginService;
    let appComponent: AppComponent;

    beforeEach(()=>{
        loginService = new LoginService();
        appComponent = new AppComponent(loginService);
    });

    it(`should check whether the compo`, () => {
        spyOn(loginService, 'login').and.returnValue(true);
        expect(appComponent.isAuthenticated()).toBeTruthy();
    });

    it(`should check whether the compo`, () => {
        spyOn(loginService, 'login').and.returnValue(false);
        expect(appComponent.isAuthenticated()).toBeFalsy();
    });


});