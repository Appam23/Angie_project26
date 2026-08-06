const siteData = require('../Model/model');

const getHome = (req, res) => {
  res.render('home', { data: siteData });
};

module.exports = { siteData, getHome };