import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, 'brief.html');
const outputPath = path.join(__dirname, '..', 'public', 'opencandidate-brief.pdf');

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
await page.pdf({
  path: outputPath,
  width: '8.5in',
  height: '11in',
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
});
await browser.close();
console.log('PDF generated:', outputPath);
