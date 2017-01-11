import { browser, element, by } from 'protractor';

export class AgentSalesScripterPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('Sales-root h1')).getText();
  }
}
