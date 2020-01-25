var conn = require('./../inc/db');
var menus = require('./../inc/menus');
var reservations = require('./../inc/reservations');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  menus.getMenus().then(results => {

    res.render('index', {
      title: 'Restaurante Saboroso!',
      menus: results,
      isHome: true
    });

  });

});

router.get('/contacts', function (req, res, next) {

  res.render('contacts', {
    title: 'Restaurante Saboroso!',
    background: 'images/img_bg_3.jpg',
    h1: 'Diga um oi!'
  });

});

router.get('/menus', function (req, res, next) {

  menus.getMenus().then(results => {

    res.render('index', {
      title: 'Restaurante Saboroso!',
      menus: results,
      background: 'images/img_bg_1.jpg',
      h1: 'Saboreie nosso menu!'
    });

  });

});

router.get('/reservations', function (req, res, next) {

  reservations.render(req, res);

});

router.post('/reservations', function (req, res, next) {

  if (!req.body.name) {
    reservations.render(req, res, 'digite o nome');
  } else if (!req.body.email) {
    reservations.render(req, res, 'digite o email');
  } else if (!req.body.people) {
    reservations.render(req, res, 'selecione o numero de pessoas');
  } else if (!req.body.date) {
    reservations.render(req, res, 'selecione a data');
  } else if (!req.body.time) {
    reservations.render(req, res, 'selecione a hora');
  } else { }

});


router.get('/services', function (req, res, next) {

  res.render('services', {
    title: 'Restaurante Saboroso!',
    background: 'images/img_bg_1.jpg',
    h1: 'É um prazer poder servir!'
  });

});
module.exports = router;
