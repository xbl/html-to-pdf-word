const fs = require('fs').promises;
const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const targetName = 'output';
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`file://${path.resolve(__dirname, '../template/template.html')}`)
  await page.pdf({ path: `${targetName}.pdf`, format: 'a4' });
  const html = await page.content()
  await browser.close();

  await fs.writeFile(path.resolve(__dirname, `../${targetName}.doc`), html, 'utf8' );
})();