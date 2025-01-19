import  { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';

const Footer = () => {
const {t} =useTranslation();
const footerLinks = t('footerLinks.items', {returnObjects: true})
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer className='py-5 sm:px-10 px-5'>
        <div className="screen-max-width">
            <p className="font-semibold text-gray dark:text-dark-gray text-xs">
                <span className="underline text-pink dark:text-dark-blue">
                    Find an Apple Store {' '}
                </span>
                or {' '}
                <span className="underline text-pink dark:text-dark-blue">
                    other retailer {' '}
                </span>
                near you.
            </p>
            <p className="font-semibold text-gray dark:text-dark-gray text-xs">
                or call 0020101010101 
            </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full"  >
            <div className="flex md:flex-row flex-col justify-between md:items-center ">
                <p className="font-semibold text-gray text-xs">Copright @ 2024 Apple Inc. All rights reserved.</p>
            <div className="flex justify-between ">
                {footerLinks.map((link, index)=> (
                    <p key={index} className="font-semibold text-gray dark:text-dark-gray text-xs">
                        {link} {' '}
                        {index !== footerLinks.length -1 && windowWidth > 420 && (
                            <span className="mx-2 "> | </span>
                        ) }
                    </p>
                    
                ))}
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer