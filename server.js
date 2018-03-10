'use strict'

// require('dotenv').config();
const express    = require('express');
const logger     = require('morgan');
const path       = require('path');
const bodyParser = require('body-parser');
const PORT       = process.argv[2] || process.env.PORT || 3000;
const app        = express();

app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routers/news-router.js'));
app.use('/news', require('./routers/news-router.js'));

app.listen(PORT, () => console.log('LISTENING TO PORT: ', PORT));
