const path = require('path');
const EmailTemplate = require('email-templates').EmailTemplate;

const supportedLocales = ['en_US'];

describe('new-dojo', () => {
  supportedLocales.forEach((locale) => {
    it(`should render ${locale}`, (done) => {
      const templateDir = path.join(__dirname, '../', 'email-templates', `new-dojo-${locale}`);
      const template = new EmailTemplate(templateDir);
      template.render(
        {
          dojoEmail: 'somedojo@coderdojo.com',
          dojoLink: 'http://example.com',
          dojoName: 'Some Dojo',
          dojoLeadName: 'Some Name',
          applicationLink: 'http://example.com',
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