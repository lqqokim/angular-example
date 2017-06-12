import { AngularjsExamplePage } from './app.po';

describe('angularjs-example App', () => {
  let page: AngularjsExamplePage;

  beforeEach(() => {
    page = new AngularjsExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
