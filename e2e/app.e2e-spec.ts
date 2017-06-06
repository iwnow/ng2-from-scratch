import { LazySsrPage } from './app.po';

describe('lazy-ssr App', () => {
  let page: LazySsrPage;

  beforeEach(() => {
    page = new LazySsrPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
