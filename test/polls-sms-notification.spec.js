const path = require('path');
const EmailTemplate = require('email-templates').EmailTemplate;

const supportedLocales = ['en_US'];

describe('polls-sms-notification', () => {
  supportedLocales.forEach((locale) => {
    it(`should render ${locale}`, (done) => {
      const templateDir = path.join(__dirname, '../', 'email-templates', `polls-sms-notification-${locale}`);
      const template = new EmailTemplate(templateDir);
      template.render(
        {
          question: 'Some Question',
          pollLink: 'http://example.com',
        },
        (err, result) => {
          if (err) throw(err);
          done();
        },
      );
    });
  });
});