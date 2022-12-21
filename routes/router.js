const express = require('express');

const router = express.Router();
const { emailValid, nameValid, messageValid } = require('../middleware/middle');
const { contactMe } = require('../controllers/main-controller');

router.post('/contactme', emailValid, nameValid, messageValid, contactMe);

module.exports = router;
