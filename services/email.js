const nodemailer = require('nodemailer');
const config = require('../config/email');

/**
 *.
 * @param {string} recipient
 * @param {string} subject
 * @param {string} content
 * @param {function} callback
 * @return {function} callback
 */
async function sendEmail(recipient, subject, content, callback) {
  try {
    const transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: false,
      auth: {
        user: config.username,
        pass: config.password,
      },
    });

    await transporter.sendMail({
      from: '"Email4free 👻" <email4free@4freemail.com>',
      to: recipient,
      subject: subject,
      text: 'A new email',
      html: content,
    });

    return callback(200, {msg: 'Email deliverd with success'});
  } catch (e) {
    console.log(e);
    return callback(500, {msg: 'Internal error, try again later'});
  }
}

module.exports = {
  sendEmail: sendEmail,
};
