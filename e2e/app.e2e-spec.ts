import { PascalsTriangleDisplayPage } from './app.po';

describe('pascals-triangle-display App', () => {
  let page: PascalsTriangleDisplayPage;

  beforeEach(() => {
    page = new PascalsTriangleDisplayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
