import { useGSAP } from "@gsap/react";
import { QasassImg, menuIconImg} from "../utils";
import { useState, useEffect } from "react";
import gsap from "gsap";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const {t} = useTranslation();
  const [active, setActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    if (active) {
      gsap.to(".menuIcon", {
        y: 0,
        duration: 0.5,
        ease: "power2.inOut",
        opacity: 1,
      });
    } else {
      gsap.to(".menuIcon", {
        y: 100,
        duration: 0.5,
        ease: "power2.inOut",
        opacity: 0,
      });
    }
  }, [active]);

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-baseline relative">
      <nav className="flex justify-between w-full items-center screen-max-width ">
        <img src={QasassImg} alt="Qasass" width={20} />

        <div className={`flex-1 justify-end items-center space-x-4 hidden md:flex`}>
          {t("navbar.items", { returnObjects: true }).map((nav) => (
            <div
              key={nav}
              className={`px-5 text-sm cursor-pointer dark:text-dark-gray text-zinc-darkZ dark:hover:text-white hover:text-black transition-all `}
            >
              {nav}
            </div>
          ))}
          <ThemeToggle/>
          <LanguageSwitcher/>
        </div>
        
        {windowWidth < 768 ? (
          <img
            src={menuIconImg}
            alt="menu"
            className="w-[50px]"
            onClick={() => setActive(!active)}
          />
        ) : (
          ""
        )}
        {active && windowWidth < 768 &&(
          <div className={`menuIcon flex-1 justify-end`}>
          {t('navbar.items', { returnObjects: true }).map((nav) => (
            <div
              key={nav}
              className={`px-5 text-sm cursor-pointer dark:text-dark-gray dark:hover:text-white text-zinc-darkZ  hover:text-black transition-all`}
            >
              {nav}
            </div>
          ))}
          <ThemeToggle/>
          <LanguageSwitcher/>
          </div>
        )}

      </nav>
    </header>
  );
};

export default Navbar;
