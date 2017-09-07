import { Angular.IoOfficialPage } from './app.po';

describe('angular.io-official App', () => {
    let page: Angular.IoOfficialPage;

    beforeEach(() => {
        page = new Angular.IoOfficialPage();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to app!');
    });
});
