import test from 'node:test';
import assert from 'node:assert/strict';
import { languageFromHass } from '../src/translations.js';

const cases = [
  {
    name: 'Locale language de selects German',
    hass: { locale: { language: 'de' } },
    expected: 'de',
  },
  {
    name: 'Locale language en selects English',
    hass: { locale: { language: 'en' } },
    expected: 'en',
  },
  {
    name: 'Empty locale language falls back to English',
    hass: { locale: { language: '' } },
    expected: 'en',
  },
  {
    name: 'Missing locale language falls back to English',
    hass: {},
    expected: 'en',
  },
  {
    name: 'Unsupported locale language falls back to English',
    hass: { locale: { language: 'fr' } },
    expected: 'en',
  },
  {
    name: 'Regional German locale selects German',
    hass: { locale: { language: 'de-DE' } },
    expected: 'de',
  },
  {
    name: 'HA language selects German when locale is missing',
    hass: { language: 'de' },
    expected: 'de',
  },
  {
    name: 'HA language selects German when locale language is empty',
    hass: {
      locale: { language: '' },
      language: 'de',
    },
    expected: 'de',
  },
];

for (const { name, hass, expected } of cases) {
  test(name, () => {
    const actual = languageFromHass(hass);

    assert.equal(actual, expected);
  });
}