import { AgentSalesScripterPage } from './app.po';

describe('agent-sales-scripter App', function() {
  let page: AgentSalesScripterPage;

  beforeEach(() => {
    page = new AgentSalesScripterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Sales works!');
  });
});
