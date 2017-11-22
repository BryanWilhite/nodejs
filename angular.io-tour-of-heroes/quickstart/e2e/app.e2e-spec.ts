import { AppPage } from './app.po';

describe('QuickStart E2E Tests', function() {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Hello Angular');
    });
});
