
import {SnakeCasePipe} from './snakecase.pipe';

describe(`it should test snake case pipe`, () => {
    let snakecasePipe: SnakeCasePipe;

    beforeEach( ()=> {
        snakecasePipe = new SnakeCasePipe();
    });

    it(`should convert the input with default char`, () => {
        let message = snakecasePipe.transform('hi how are you');
        expect(message).toEqual('hi-how-are-you');
    });
   
    it(`should convert the input with input char`, () => {
        let message = snakecasePipe.transform('hi how are you', '#');
        expect(message).toEqual('hi#how#are#you');
    });
});