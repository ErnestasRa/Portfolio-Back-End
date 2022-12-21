const MessageSchema = require('../schemas/contact-me-schema');
const sendRes = require('../modules/universal-res');

module.exports = {
  contactMe: async (req, res) => {
    const { name, email, message } = req.body;
    async function messageMe() {
      const newMessage = new MessageSchema({
        name,
        email,
        message,
      });
      console.log(newMessage);
      await newMessage.save();
    }
    sendRes(res, false, 'message created', { OK: 'ok' });
    messageMe();
  },
};
