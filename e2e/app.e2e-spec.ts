import { AngularGlobalInfoPage } from './app.po';

describe('angular-global-info App', () => {
  let page: AngularGlobalInfoPage;

  beforeEach(() => {
    page = new AngularGlobalInfoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
