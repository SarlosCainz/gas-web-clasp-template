function doGet() {
  const html = HtmlService.createHtmlOutputFromFile('build/app');
  html.setTitle("gas-web-clasp-template");
  return html;
}
