import { ReadrsAdminPage } from './app.po';

describe('readrs-admin App', () => {
  let page: ReadrsAdminPage;

  beforeEach(() => {
    page = new ReadrsAdminPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
