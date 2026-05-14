import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: { translation: { welcome: 'Welcome to Housing In Padova', search: 'Search' } },
  it: { translation: { welcome: 'Benvenuto a Housing In Padova', search: 'Cerca' } }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;
