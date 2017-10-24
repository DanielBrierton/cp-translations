const path = require('path');
const EmailTemplate = require('email-templates').EmailTemplate;

const supportedLocales = [
  'bg_BG', 'de_DE', 'el_GR', 'en_US', 'es_AR',
  'es_ES', 'et_EE', 'fr_FR', 'hi_IN', 'it_IT',
  'ja_JP', 'lt_LT', 'mt_MT', 'nl_NL', 'pl_PL',
  'pt_PT', 'ro_RO', 'sk_SK', 'sl_SI', 'tr_TR',
  'uk_UA',
];

describe('ticket-application-received', () => {
  supportedLocales.forEach((locale) => {
    it(`should render ${locale}`, (done) => {
      const templateDir = path.join(__dirname, '../', 'email-templates', `ticket-application-received-${locale}`);
      const template = new EmailTemplate(templateDir);
      template.render(
        {
          applicantName: 'Some Name',
          intro: 'Intro!',
          applicationDate: '01/01/1970',
          sessionName: 'Scratch',
          tickets: [
            {
              ticketName: 'Ninja',
              ticketType: 'ninja',
              quantity: 1
            },
            {
              ticketName: 'Parent',
              ticketType: 'parent-guardian',
              quantity: 1
            },
          ],
          status: 'Pending',
          eventDate: '01/01/1970',
          event: {
            id: 2,
            address: '123 Fake St.',
          },
          applicationId: 1,
          cancelLinkBase: 'http://example.com',
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