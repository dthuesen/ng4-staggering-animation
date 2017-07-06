import { Ng4StaggeringAnimationPage } from './app.po';

describe('ng4-staggering-animation App', () => {
  let page: Ng4StaggeringAnimationPage;

  beforeEach(() => {
    page = new Ng4StaggeringAnimationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
