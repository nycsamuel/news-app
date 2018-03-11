'use strict'
const fetch = require('node-fetch');
const newsUrl = 'https://newsapi.org/v2';
const apiHeader = { 'X-Api-Key': process.env.NEWS_API };

const getDomains = function (req, res, next) {
  fetch(`${newsUrl}/sources?language=en`, {
    method: 'GET',
    headers: apiHeader,
  })
    .then(response => response.json())
    .then(response => { 
      res.domains = response.sources
      next();
    })
    .catch(err => console.log('getDomain in news-api Error', err));
};

const getNewsWithSelectedSources = function (req, res, next) {
  // maximum of 20 sources
  // TODO: get saved sources from db or allow user to select
  let selectedSources = [
    'wired',
    'the-new-york-times',
    'ars-technica',
    'bloomberg',
    // 'buzzfeed',
    'engadget',
    'hacker-news',
    'time',
    'the-wall-street-journal',
    'the-next-web',
    'reuters',
    'forbes'
  ];

  fetch(`${newsUrl}/everything?language=en&sources=${selectedSources.join(',')}`, {
    method: 'GET',
    headers: apiHeader,
  })
    .then(response => response.json())
    .then(response => {
      res.articles = response.articles;
      next();
    })
    .catch(err => console.log('getNewsWithSelectedSources in news-api Error', err));
};

module.exports = {
  getDomains,
  getNewsWithSelectedSources,
};