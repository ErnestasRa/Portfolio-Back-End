const mongoose = require('mongoose');

const { Schema } = mongoose;

const contactMeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const exportUser = mongoose.model('contactMeSchema', contactMeSchema);

module.exports = exportUser;
