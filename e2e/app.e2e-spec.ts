import { DemoExpressAngularCliPage } from './app.po';

describe('demo-express-angular-cli App', function() {
  let page: DemoExpressAngularCliPage;

  beforeEach(() => {
    page = new DemoExpressAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
