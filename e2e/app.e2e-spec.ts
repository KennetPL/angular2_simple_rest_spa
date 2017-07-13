import { Angular2SimpleRestSpaPage } from './app.po';

describe('angular2-simple-rest-spa App', () => {
  let page: Angular2SimpleRestSpaPage;

  beforeEach(() => {
    page = new Angular2SimpleRestSpaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
