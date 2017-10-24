const path = require('path');
const EmailTemplate = require('email-templates').EmailTemplate;

const supportedLocales = ['en_US'];

describe('polls-sms-notification-reminder', () => {
  supportedLocales.forEach((locale) => {
    it(`should render ${locale}`, (done) => {
      const templateDir = path.join(__dirname, '../', 'email-templates', `polls-sms-notification-reminder-${locale}`);
      const template = new EmailTemplate(templateDir);
      template.render(
        {},
        (err, result) => {
          if (err) throw(err);
          done();
        },
      );
    });
  });
});