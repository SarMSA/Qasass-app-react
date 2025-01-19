import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdArrowDropDown } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { useDirection } from '../context/DirectionContext';

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n, t } = useTranslation();
  const { setDirection} = useDirection();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    
    // Get direction from translation
    const currentDirection = lng === 'ar' ? 'rtl' : 'ltr';
    
    // Update context and document direction
    setDirection(currentDirection);
    document.documentElement.dir = currentDirection;
    document.documentElement.lang = lng;
    
    setIsOpen(false);
  };

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية' }
  ];

  return (
    <div className="relative px-5 dark:text-dark-gray dark:hover:text-white hover:text-black">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center py-2 rounded-md relative"
      >
         <GrLanguage className="mx-1" /> {i18n.language.toUpperCase()}<MdArrowDropDown  />
      </button>
      
      {isOpen && (
        <div className={`absolute end-0 top-full mt-2 w-48 dark:bg-dark-zinc bg-zinc-lightZ rounded-md shadow-lg overflow-y-auto max-h-60 z-50`}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full text-start px-4 py-2 dark:hover:text-white hover:text-black ${
                i18n.language === lang.code ? 'bg-white-100' : ''
              }`}
            >
             {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;