import { Injectable } from '@angular/core';

@Injectable()
export class HelloService {
    
    sayHello(message: string): string {
        return `Hello ${message}`;
    }
}