const request = require('request');
const cheerio = require('cheerio');

request('http://eduro.com/', (err, response, html) => {
  if (!err && response.statusCode === 200) {
    const $ = cheerio.load(html);
    const content = $('dailyquote').text();
    const today = JSON.stringify(content)
      .split('\\n\\n')[1]
      .trim();
    console.log(today);
  } else {
    console.log(err);
  }
});

// NOTE:Run "npm install" then "npm run dev" from the terminal for the result.
