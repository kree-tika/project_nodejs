var express = require('express');
var router = express.Router();
var product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/novels', function(req, res, next) {
  res.render('novels', { title: 'Novels' });
});
router.get('/used', function(req, res, next) {
  res.render('used', { title: 'Novels' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About us' });
});

module.exports = router;
