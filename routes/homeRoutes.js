const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.get('api/home', requireLogin, (req, res) => {
    res.json("This is the home page");
  })
};
