import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';
import { selector } from 'rxjs/operator/publish';
import { SnakeCasePipe } from './snakecase.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
    selector: 'mock-component',
    template: '<h1> {{message | snakecase}} </h1>'
})
export class MockComponent {
    message = "App works";
}

describe(`it should test snake case pipe`, () => {

    let mockFixture:ComponentFixture<MockComponent>;
    let titleEL:DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[
                MockComponent,
                SnakeCasePipe
            ]
        }).compileComponents();
    });

    beforeEach( () => {
        mockFixture = TestBed.createComponent(MockComponent);
        titleEL = mockFixture.debugElement.query(By.css('h1'));

    });

    it(`should test snakecase pipe with test bed`, () => {
        mockFixture.detectChanges();
        let message = titleEL.nativeElement.textContent.trim();
        expect(message).toEqual('App-works');
    });
});