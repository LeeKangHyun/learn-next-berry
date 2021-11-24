import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import puppeteer from 'puppeteer';

const MockCrawl = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://news.ycombinator.com', {
      waitUntil: 'networkidle2',
    });

    const anchorList = await page.$$<HTMLAnchorElement>('td.title a.titlelink');
    console.log(anchorList);

    await browser.close();

    res.status(200).json({});

  } catch (err) {
    console.log(err);
  }
}

export default MockCrawl;
