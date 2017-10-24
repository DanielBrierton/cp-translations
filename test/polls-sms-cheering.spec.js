const path = require('path');
const EmailTemplate = require('email-templates').EmailTemplate;

const supportedLocales = ['en_US'];

describe('polls-sms-cheering', () => {
  supportedLocales.forEach((locale) => {
    it(`should render ${locale}`, (done) => {
      const templateDir = path.join(__dirname, '../', 'email-templates', `polls-sms-cheering-${locale}`);
      const template = new EmailTemplate(templateDir);
      template.render(
        {
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