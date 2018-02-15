var bookshelf = require('../config/bookshelf');
var User = require('../models/User');

/**
 * GET /
 */
exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};

exports.entreprise = function(req, res) {

  User.fetchAll().then(function(tab) {
    res.render('entreprise', {
      title: 'entreprise',
      enter: tab.models
    });
});

};
