const path = require('path');
const EmailTemplate = require('email-templates').EmailTemplate;

const supportedLocales = [
  'bg_BG', 'de_DE', 'el_GR', 'en_US', 'es_AR',
  'es_ES', 'et_EE', 'fr_FR', 'hi_IN', 'it_IT',
  'ja_JP', 'lt_LT', 'mt_MT', 'nl_NL', 'pl_PL',
  'pt_PT', 'ro_RO', 'sk_SK', 'sl_SI', 'tr_TR',
  'uk_UA',
];

describe('dojos-accept-badge-award', () => {
  supportedLocales.forEach((locale) => {
    it(`should render ${locale}`, (done) => {
      const templateDir = path.join(__dirname, '../', 'email-templates', `accept-badge-award-${locale}`);
      const template = new EmailTemplate(templateDir);
      template.render(
        {
          badgeName: 'Some Badge',
          badgeImage: 'Some image',
          link: 'Some link',
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