const path = require('path');
const EmailTemplate = require('email-templates').EmailTemplate;

const supportedLocales = ['en_US'];

describe('polls-notification', () => {
  supportedLocales.forEach((locale) => {
    it(`should render ${locale}`, (done) => {
      const templateDir = path.join(__dirname, '../', 'email-templates', `polls-notification-${locale}`);
      const template = new EmailTemplate(templateDir);
      template.render(
        {
          question: 'Some Question',
          dojoName: 'Some Dojo',
          pollLink: 'http://example.com',
          year: 2017,
        },
        (err, result) => {
          if (err) throw(err);
          done();
        },
      );
    });
  });
});