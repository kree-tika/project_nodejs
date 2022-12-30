var express = require('express');
var router = express.Router();
var product = require('../models/product');
const Selldb = require('../models/selldata');
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
router.get('/sellform', function(req, res, next) {
  res.render('sellform', { title: 'Selling' });
});
router.get('/plan', function(req, res, next) {
  res.render('plan', { title: 'Membership plan' });
});
router.post('/selldata', async function(req, res, next) {
  await Selldb.insertMany([{
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      city: req.body.city,
      email: req.body.email,
      bookname: req.body.bookname,
      category: req.body.category,
      price: req.body.price,
      photo: req.body.photo
  }]);
  res.redirect('/');
})

module.exports = router;
