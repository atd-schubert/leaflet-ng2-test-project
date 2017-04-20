import { LeafletNg2InstallTestPage } from './app.po';

describe('leaflet-ng2-install-test App', function() {
  let page: LeafletNg2InstallTestPage;

  beforeEach(() => {
    page = new LeafletNg2InstallTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
