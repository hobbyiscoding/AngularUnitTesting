import { ComponentFixture } from '@angular/core/testing/src/testing';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LoginService } from './service/login.service';

class MockService {
    public login(username:string, password:string):boolean {
        return true;
    }
}


describe(`it should test AppComponent`, () => {
    let appComponent: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations:[AppComponent],
            providers:[LoginService]
        });

        TestBed.overrideComponent(
            AppComponent,
            {
                set: {
                    providers:[
                        {provide:LoginService, useClass:MockService}
                    ]
                }
            }
        );

        fixture = TestBed.createComponent(AppComponent);
        appComponent = fixture.componentInstance;

    });

    it(`should check whether the compo`, () => {
        expect(appComponent.isAuthenticated()).toBeTruthy();
    });


});