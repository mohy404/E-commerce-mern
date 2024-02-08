// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          deliveryArea: 'Delivery Area',
          cairo: 'Cairo',
          searchPlaceholder: 'What are you looking for?',
          login: 'My account',
          createAccount: 'Cart',
          changeLanguage: 'Change Language',
          toEnglish: 'English',
        },
      },
      ar: {
        translation: {
          deliveryArea: 'منطقة التوصيل',
          cairo: 'القاهرة',
          searchPlaceholder: 'أنت بتدور على إيه؟',
          login: 'حسابي',
          createAccount: 'مشترياتي',
          changeLanguage: 'تغيير اللغة',
          toEnglish: 'English',
        },
      },
    },
  });

export default i18n;
