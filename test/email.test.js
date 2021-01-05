require('dotenv').config();

const emailService = require('../services/email');

test('test send email', (done) => {
  emailService.sendEmail('trillingbot@gmail.com', 'test email',
      'this is a tent', function(code, msg) {
        expect(code).toBe(200);
        done();
      });
});
