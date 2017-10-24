const path = require('path');
const EmailTemplate = require('email-templates').EmailTemplate;

const supportedLocales = [
  'bg_BG', 'de_DE', 'el_GR', 'en_US', 'es_AR',
  'es_ES', 'et_EE', 'fr_FR', 'hi_IN', 'it_IT',
  'ja_JP', 'lt_LT', 'mt_MT', 'nl_NL', 'pl_PL',
  'pt_PT', 'ro_RO', 'sk_SK', 'sl_SI', 'tr_TR',
  'uk_UA',
];

describe('auth-create-reset', () => {
  supportedLocales.forEach((locale) => {
    it(`should render ${locale}`, (done) => {
      const templateDir = path.join(__dirname, '../', 'email-templates', `auth-create-reset-${locale}`);
      const template = new EmailTemplate(templateDir);
      template.render(
        {
          name: 'Some Name',
          resetlink: 'http://example.com/reset',
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