import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import logo from '../../../src/assets/logo.png';
import login from '../../../src/assets/login.png';
import cart from '../../../src/assets/cart.png';

export const NavBarLogin = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.setAttribute('dir', i18n.dir());
    document.documentElement.setAttribute('lang', i18n.language);
  }, [i18n.dir(), i18n.language]);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const isRTL = i18n.dir() === 'rtl';

  return (
    <nav className={`bg-neutral-800 text-white fixed w-full z-50 ${isRTL ? 'rtl' : 'ltr'}`}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
      <div className="flex flex-wrap items-center justify-between">
        {/* Logo - Adjust size on smaller screens */}
        <a href="/" className="py-2 flex items-center shrink-0">
          <img src={logo} className="h-10 sm:h-14" alt="Logo" />
        </a>

        {/* Hide less important elements on smaller screens */}
        <div className="hidden sm:flex items-center space-x-4 flex-grow justify-end md:justify-center">
          {/* Language Selector Dropdown */}
          <select onChange={(e) => changeLanguage(e.target.value)} className="text-white py-2 px-3 bg-neutral-800 rounded">
            <option value="en">{t('toEnglish')}</option>
            <option value="ar">{t('العربيه')}</option>
            {/* Add more languages as needed */}
          </select>

          {/* Delivery Area Span */}
          <span className="py-2 px-3 bg-neutral-800 rounded">{t('deliveryArea')}: {t('cairo')}</span>
        </div>

        {/* Search input - Adjust width on smaller screens */}
        <div className="flex-grow md:flex md:items-center pl-20">
          <input
            type="search"
            placeholder={t('searchPlaceholder')}
            className="w-full px-4 py-2 rounded-full bg-gray-200 text-black focus:outline-none"
          />
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-4 md:space-x-2 justify-end">
          {/* Login Action */}
          <a href="/login" className="flex items-center hover:text-gray-300">
            <img src={login} className="h-6 sm:h-8" alt="Login" />
            <span className="ml-2 text-sm">{t('login')}</span>
          </a>

          {/* Cart Action */}
          <a href="/cart" className="flex items-center hover:text-gray-300">
            <img src={cart} className="h-6 sm:h-8" alt="Cart" />
            <span className="ml-2 text-sm">{t('createAccount')}</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
  );
};
