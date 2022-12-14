const notLoggedInPages = require('../../modules/navbar/not-logged-in');
const loggedInPages = require('../../modules/navbar/logged-in');
const settingsNotLoggedIn = require('../../modules/navbar/settings-not-logged-in');
const settingsLoggedIn = require('../../modules/navbar/settings');

module.exports = {
  navbarNotLoggedIn: async (req, res) => {
    if (!req.session.user) {
      return res.send(notLoggedInPages);
    }
    return res.send(loggedInPages);
  },
  navbarSettings: async (req, res) => {
    if (!req.session.user) {
      return res.send(settingsNotLoggedIn);
    }
    return res.send(settingsLoggedIn);
  },
};
