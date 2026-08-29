// Script to build src/translations/i18n.js and copy locales to src/translations/locales/
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const groupFiles = [
  'lang_en_hi_es_fr_de.js',
  'lang_ja_zh_ar_pt_ru.js',
  'lang_it_ko_tr_bn_ur.js',
  'lang_id_vi_th_ta_te.js',
  'lang_mr_gu_pa_nl_pl.js',
  'lang_uk_sv_el_cs_ro.js',
  'lang_hu_da_fi_no_he.js',
  'lang_fa_ms_tl_sw_sk.js',
  'lang_bg_sr_hr_lt.js'
];

const localesDir = path.join(rootDir, 'src', 'translations', 'locales');
if (!fs.existsSync(localesDir)) {
  fs.mkdirSync(localesDir, { recursive: true });
}

// Copy each group file to src/translations/locales/ fixing import
groupFiles.forEach(file => {
  const srcPath = path.join(rootDir, 'scripts', 'data', file);
  const destPath = path.join(localesDir, file);
  let content = fs.readFileSync(srcPath, 'utf8');
  content = content.replace("from '../generateTranslations.js';", "from './master_en.js';");
  fs.writeFileSync(destPath, content, 'utf8');
  console.log(`Copied ${file} to ${destPath}`);
});

// Now construct src/translations/i18n.js
const i18nContent = `// NETSPEEDPRO Multi-Language Localization System (44 Global, European, Asian, American & African Languages)

import { en_dict as en, hi_dict as hi, es_dict as es, fr_dict as fr, de_dict as de } from './locales/lang_en_hi_es_fr_de.js';
import { ja_dict as ja, zh_dict as zh, ar_dict as ar, pt_dict as pt, ru_dict as ru } from './locales/lang_ja_zh_ar_pt_ru.js';
import { it_dict as it, ko_dict as ko, tr_dict as tr, bn_dict as bn, ur_dict as ur } from './locales/lang_it_ko_tr_bn_ur.js';
import { id_dict as id, vi_dict as vi, th_dict as th, ta_dict as ta, te_dict as te } from './locales/lang_id_vi_th_ta_te.js';
import { mr_dict as mr, gu_dict as gu, pa_dict as pa, nl_dict as nl, pl_dict as pl } from './locales/lang_mr_gu_pa_nl_pl.js';
import { uk_dict as uk, sv_dict as sv, el_dict as el, cs_dict as cs, ro_dict as ro } from './locales/lang_uk_sv_el_cs_ro.js';
import { hu_dict as hu, da_dict as da, fi_dict as fi, no_dict as no, he_dict as he } from './locales/lang_hu_da_fi_no_he.js';
import { fa_dict as fa, ms_dict as ms, tl_dict as tl, sw_dict as sw, sk_dict as sk } from './locales/lang_fa_ms_tl_sw_sk.js';
import { bg_dict as bg, sr_dict as sr, hr_dict as hr, lt_dict as lt } from './locales/lang_bg_sr_hr_lt.js';

export const LANGUAGES = [
  // Global & Regional Languages (with explicit 2-letter ISO country codes for real flag rendering)
  { code: 'en', label: 'English', native: 'English', short: 'EN', flag: '🇺🇸', country: 'us', region: 'Global' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी', short: 'HI', flag: '🇮🇳', country: 'in', region: 'India' },
  { code: 'es', label: 'Spanish', native: 'Español', short: 'ES', flag: '🇪🇸', country: 'es', region: 'Europe/LatAm' },
  { code: 'fr', label: 'French', native: 'Français', short: 'FR', flag: '🇫🇷', country: 'fr', region: 'Europe' },
  { code: 'de', label: 'German', native: 'Deutsch', short: 'DE', flag: '🇩🇪', country: 'de', region: 'Europe' },
  { code: 'ja', label: 'Japanese', native: '日本語', short: 'JA', flag: '🇯🇵', country: 'jp', region: 'East Asia' },
  { code: 'zh', label: 'Chinese', native: '简体中文', short: 'ZH', flag: '🇨🇳', country: 'cn', region: 'East Asia' },
  { code: 'ar', label: 'Arabic', native: 'العربية', short: 'AR', flag: '🇸🇦', country: 'sa', region: 'Middle East' },
  { code: 'pt', label: 'Portuguese', native: 'Português', short: 'PT', flag: '🇧🇷', country: 'br', region: 'Americas/Europe' },
  { code: 'ru', label: 'Russian', native: 'Русский', short: 'RU', flag: '🇷🇺', country: 'ru', region: 'Eurasia' },
  { code: 'it', label: 'Italian', native: 'Italiano', short: 'IT', flag: '🇮🇹', country: 'it', region: 'Europe' },
  { code: 'ko', label: 'Korean', native: '한국어', short: 'KO', flag: '🇰🇷', country: 'kr', region: 'East Asia' },
  { code: 'tr', label: 'Turkish', native: 'Türkçe', short: 'TR', flag: '🇹🇷', country: 'tr', region: 'Eurasia' },
  { code: 'bn', label: 'Bengali', native: 'বাংলা', short: 'BN', flag: '🇧🇩', country: 'bd', region: 'South Asia' },
  { code: 'ur', label: 'Urdu', native: 'اردو', short: 'UR', flag: '🇵🇰', country: 'pk', region: 'South Asia' },
  { code: 'id', label: 'Indonesian', native: 'Bahasa Indonesia', short: 'ID', flag: '🇮🇩', country: 'id', region: 'Southeast Asia' },
  { code: 'vi', label: 'Vietnamese', native: 'Tiếng Việt', short: 'VI', flag: '🇻🇳', country: 'vn', region: 'Southeast Asia' },
  { code: 'th', label: 'Thai', native: 'ไทย', short: 'TH', flag: '🇹🇭', country: 'th', region: 'Southeast Asia' },
  { code: 'ta', label: 'Tamil', native: 'தமிழ்', short: 'TA', flag: '🇮🇳', country: 'in', region: 'India' },
  { code: 'te', label: 'Telugu', native: 'తెలుగు', short: 'TE', flag: '🇮🇳', country: 'in', region: 'India' },
  { code: 'mr', label: 'Marathi', native: 'मराठी', short: 'MR', flag: '🇮🇳', country: 'in', region: 'India' },
  { code: 'gu', label: 'Gujarati', native: 'ગુજરાતી', short: 'GU', flag: '🇮🇳', country: 'in', region: 'India' },
  { code: 'pa', label: 'Punjabi', native: 'ਪੰਜਾਬੀ', short: 'PA', flag: '🇮🇳', country: 'in', region: 'India' },
  { code: 'nl', label: 'Dutch', native: 'Nederlands', short: 'NL', flag: '🇳🇱', country: 'nl', region: 'Europe' },

  // Foreign & Global Languages
  { code: 'pl', label: 'Polish', native: 'Polski', short: 'PL', flag: '🇵🇱', country: 'pl', region: 'Europe' },
  { code: 'uk', label: 'Ukrainian', native: 'Українська', short: 'UK', flag: '🇺🇦', country: 'ua', region: 'Europe' },
  { code: 'sv', label: 'Swedish', native: 'Svenska', short: 'SV', flag: '🇸🇪', country: 'se', region: 'Nordic' },
  { code: 'el', label: 'Greek', native: 'Ελληνικά', short: 'EL', flag: '🇬🇷', country: 'gr', region: 'Europe' },
  { code: 'cs', label: 'Czech', native: 'Čeština', short: 'CS', flag: '🇨🇿', country: 'cz', region: 'Europe' },
  { code: 'ro', label: 'Romanian', native: 'Română', short: 'RO', flag: '🇷🇴', country: 'ro', region: 'Europe' },
  { code: 'hu', label: 'Hungarian', native: 'Magyar', short: 'HU', flag: '🇭🇺', country: 'hu', region: 'Europe' },
  { code: 'da', label: 'Danish', native: 'Dansk', short: 'DA', flag: '🇩🇰', country: 'dk', region: 'Nordic' },
  { code: 'fi', label: 'Finnish', native: 'Suomi', short: 'FI', flag: '🇫🇮', country: 'fi', region: 'Nordic' },
  { code: 'no', label: 'Norwegian', native: 'Norsk', short: 'NO', flag: '🇳🇴', country: 'no', region: 'Nordic' },
  { code: 'he', label: 'Hebrew', native: 'עברית', short: 'HE', flag: '🇮🇱', country: 'il', region: 'Middle East' },
  { code: 'fa', label: 'Persian', native: 'فارسی', short: 'FA', flag: '🇮🇷', country: 'ir', region: 'Middle East' },
  { code: 'ms', label: 'Malay', native: 'Bahasa Melayu', short: 'MS', flag: '🇲🇾', country: 'my', region: 'Southeast Asia' },
  { code: 'tl', label: 'Filipino', native: 'Tagalog', short: 'TL', flag: '🇵🇭', country: 'ph', region: 'Southeast Asia' },
  { code: 'sw', label: 'Swahili', native: 'Kiswahili', short: 'SW', flag: '🇰🇪', country: 'ke', region: 'Africa' },
  { code: 'sk', label: 'Slovak', native: 'Slovenčina', short: 'SK', flag: '🇸🇰', country: 'sk', region: 'Europe' },
  { code: 'bg', label: 'Bulgarian', native: 'Български', short: 'BG', flag: '🇧🇬', country: 'bg', region: 'Europe' },
  { code: 'sr', label: 'Serbian', native: 'Српски', short: 'SR', flag: '🇷🇸', country: 'rs', region: 'Europe' },
  { code: 'hr', label: 'Croatian', native: 'Hrvatski', short: 'HR', flag: '🇭🇷', country: 'hr', region: 'Europe' },
  { code: 'lt', label: 'Lithuanian', native: 'Lietuvių', short: 'LT', flag: '🇱🇹', country: 'lt', region: 'Europe' }
];

export const translations = {
  en, hi, es, fr, de,
  ja, zh, ar, pt, ru,
  it, ko, tr, bn, ur,
  id, vi, th, ta, te,
  mr, gu, pa, nl, pl,
  uk, sv, el, cs, ro,
  hu, da, fi, no, he,
  fa, ms, tl, sw, sk,
  bg, sr, hr, lt
};

// Safe translation getter with proxy fallback to English
export function getTranslations(langCode = 'en') {
  const current = translations[langCode] || translations.en || {};
  return new Proxy(current, {
    get(target, prop) {
      if (typeof prop === 'string') {
        if (prop in target && target[prop] !== undefined && target[prop] !== '') {
          return target[prop];
        }
        if (prop in en && en[prop] !== undefined) {
          return en[prop];
        }
        return prop;
      }
      return target[prop];
    }
  });
}

// Single key translation helper with fallback
export function getTranslation(langCode, key, fallback = '') {
  if (translations[langCode] && translations[langCode][key]) {
    return translations[langCode][key];
  }
  if (translations.en && translations.en[key]) {
    return translations.en[key];
  }
  return fallback || key;
}
`;

fs.writeFileSync(path.join(rootDir, 'src', 'translations', 'i18n.js'), i18nContent, 'utf8');
console.log('Successfully updated src/translations/i18n.js with all 44 languages!');
