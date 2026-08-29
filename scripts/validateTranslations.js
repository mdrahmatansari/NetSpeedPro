// Validation script to check all 44 languages in src/translations/i18n.js
import { LANGUAGES, translations, getTranslations } from '../src/translations/i18n.js';
import { en } from '../src/translations/locales/master_en.js';

console.log('--- VALIDATING NETSPEEDPRO I18N SYSTEM ---');
console.log(`Total configured languages: ${LANGUAGES.length}`);
console.log(`Total master English keys: ${Object.keys(en).length}`);

const masterKeys = Object.keys(en);
let allValid = true;

LANGUAGES.forEach(lang => {
  const dict = translations[lang.code];
  if (!dict) {
    console.error(`❌ Language missing in translations object: ${lang.code} (${lang.label})`);
    allValid = false;
    return;
  }

  const t = getTranslations(lang.code);
  let missingCount = 0;

  masterKeys.forEach(k => {
    const val = t[k];
    if (val === undefined || val === null || val === '') {
      missingCount++;
    }
  });

  if (missingCount > 0) {
    console.warn(`⚠️ ${lang.code} (${lang.label}): ${missingCount} keys missing/empty`);
    allValid = false;
  } else {
    // console.log(`✓ ${lang.code} (${lang.label}) [${lang.flag}]: 100% key coverage`);
  }
});

if (allValid) {
  console.log(`\n🎉 ALL 44 LANGUAGES HAVE 100% KEY COVERAGE! Zero missing keys.`);
} else {
  console.error(`\n❌ Validation found missing language definitions.`);
  process.exit(1);
}
