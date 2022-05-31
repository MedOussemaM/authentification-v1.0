const request = require('request');

const options = {
  method: 'GET',
  url: 'https://gaming-news.p.rapidapi.com/news',
  headers: {
    'X-RapidAPI-Host': 'gaming-news.p.rapidapi.com',
    'X-RapidAPI-Key': 'f3c9acc8a3mshdad046507d374bep1ceb9bjsn47cd5b0f5adf',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});

module.exports = game 