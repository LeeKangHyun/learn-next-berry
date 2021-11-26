import type { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';

const MockCrawl = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://news.ycombinator.com', {
      waitUntil: 'networkidle2',
    });

    const anchorList = await page.$$<HTMLAnchorElement>('td.title a.titlelink');

    const arr = anchorList.map(async (anchor) => {
      return await anchor.evaluate(el => el.textContent);
    });

    const valueList = [];

    for await (let datum of arr) {
      valueList.push(datum);
    }

    await browser.close();

    res.status(200).json(valueList);

  } catch (err) {
    console.log(err);
  }
};

export default MockCrawl;
