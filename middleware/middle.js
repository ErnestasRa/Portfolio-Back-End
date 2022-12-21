const validator = require('email-validator');
const sendRes = require('../modules/universal-res');

module.exports = {
  // eslint-disable-next-line consistent-return
  emailValid: (req, res, next) => {
    const { email } = req.body;
    if (!validator.validate(email)) { return sendRes(res, true, 'Email must include @', null); }

    next();
  },
  // eslint-disable-next-line consistent-return
  nameValid: (req, res, next) => {
    const { name } = req.body;
    if (name.length < 4 || name.length > 30) {
      return sendRes(res, true, 'Name is too short.', null);
    }
    next();
  },
  // eslint-disable-next-line consistent-return
  messageValid: (req, res, next) => {
    const { message } = req.body;
    if (message.length < 3) {
      return sendRes(res, true, 'Message is too short.', null);
    }
    next();
  },
};
