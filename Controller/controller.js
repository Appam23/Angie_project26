const siteData = require('../Model/model');

const getHome = (req, res) => {
  const digitsOnlyPhone = siteData.profile.phone.replace(/\D/g, '');
  const whatsappPhone = siteData.profile.whatsappPhone || (digitsOnlyPhone.length === 10 ? `1${digitsOnlyPhone}` : digitsOnlyPhone);

  res.render('home', {
    data: {
      ...siteData,
      profile: {
        ...siteData.profile,
        whatsappPhone
      }
    }
  });
};

module.exports = { siteData, getHome };