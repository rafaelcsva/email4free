const express = require('express');
const router = express.Router();
const emailService = require('../services/email');

/* Send email */
router.post('/send', function(req, res, next) {
  emailService.sendEmail(req.body.recipient, req.body.subject, req.body.content,
      function(code, msg) {
        return res.status(code).send(msg);
      });
});

module.exports = router;
