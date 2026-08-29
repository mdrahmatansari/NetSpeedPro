import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LOCALES_DIR = path.join(__dirname, '../src/translations/locales');
if (!fs.existsSync(LOCALES_DIR)) {
  fs.mkdirSync(LOCALES_DIR, { recursive: true });
}

import { en } from './generateTranslations.js';
import { LOCALES_DATA } from './compileTranslations.js';

// Comprehensive 44 Language Translation Builder
const languages = [
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

console.log(`Generating translations for ${languages.length} languages...`);
