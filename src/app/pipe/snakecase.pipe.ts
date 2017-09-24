import { Pipe } from '@angular/core';

@Pipe({
    name:'snakecase'
})
export class SnakeCasePipe {
    public transform(value: string, fallback?:string): string {
        if(fallback)
            return value.split(' ').join(fallback);
        else
            return value.split(' ').join('-');
    }
}