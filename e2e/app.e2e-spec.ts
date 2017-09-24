import { AngularUnitTestingPage } from './app.po';

describe('angular-unit-testing App', () => {
  let page: AngularUnitTestingPage;

  beforeEach(() => {
    page = new AngularUnitTestingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
