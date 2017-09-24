import { HelloService } from './hello.service';
describe(`it should test hello service`, () => {
    let hello: HelloService;

    beforeEach( () => {
        hello = new HelloService();
    });

    it(`should say hello`, () => {
        let message = hello.sayHello('Manoj');
        expect(message).toEqual('Hello Manoj');
    });
});