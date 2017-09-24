import { AppComponent } from './app.component';
import { LoginService } from './service/login.service';

class MockService {
    public login(username:string, password:string):boolean {
        return true;
    }
}


describe(`it should test AppComponent`, () => {
    let appComponent: AppComponent;
    let loginService: MockService;

    beforeEach(()=>{
        loginService = new MockService();
        appComponent = new AppComponent(loginService);
    });

    it(`should check whether the compo`, () => {
        expect(appComponent.isAuthenticated()).toBeTruthy();
    });


});