
xdescribe(`it shows how jasmine works`, () => {
    
     beforeEach(() => {
         console.log('set up test');
     });
     
     it(`should check how to test the code`, () => {
         expect(true).toBeTruthy();
     });
 
     it(`should check how to test the code`, () => {
         expect(false).toBeFalsy();
     });
 
     afterEach(()=> {
         console.log('tear down test');
     });
 });