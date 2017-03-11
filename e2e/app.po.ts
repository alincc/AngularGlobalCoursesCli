import { browser, element, by } from 'protractor';

export class AngularGlobalInfoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('agc-root h1')).getText();
  }
}
