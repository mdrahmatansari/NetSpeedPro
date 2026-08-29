import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const I18N_FILE = path.join(__dirname, '../src/translations/i18n.js');

console.log('Writing comprehensive i18n system for all 44 languages...');
