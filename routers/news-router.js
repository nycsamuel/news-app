'use strict';
const router = require('express').Router();
const service = require('../services/news-api.js');

// router.get('/', [service.getDomains], (req, res) => {
//   console.log('res.domains', res.domains);
//   res.render('index.html.ejs', {
//     domains: res.domains || [],
//   });
// });

router.get('/', [service.getNewsWithSelectedSources], (req, res) => {
  console.log('res.articles', res.articles);
  res.render('index.html.ejs', {
    articles: res.articles || [],
  });
});

module.exports = router;