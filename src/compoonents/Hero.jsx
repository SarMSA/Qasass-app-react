import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import { useState, useEffect } from "react";
import { childImg, familyImg} from "../utils/index";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  // const [videoSrc, setVideoSrc] = useState(
  //   window.innerWidth < 670 ? pallonsVideo : pallonsVideo
  // );

  // const handleVideoSrcSet = () => {
  //   if (window.innerWidth < 670) {
  //     setVideoSrc(pallonsVideo);
  //   } else {
  //     setVideoSrc(pallonsVideo);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("resize", handleVideoSrcSet);
  //   return () => {
  //     window.removeEventListener("resize", handleVideoSrcSet);
  //   };
  // }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 });
    gsap.to("#cta", { opacity: 1, y: -50, delay: 2 });
  });
  return (
    <section className="w-full nav-height bg-white dark:bg-black relative  ">
      <div className="h-5/6 w-full flex-center flex-col screen-max-width">
        <p id="hero" className="hero-title">
          {t("hero.header")}
        </p>
        <div className="md:w-full w-6/12 relative flex justify-center md:mb-10">
          {/* <video autoPlay playsInline={true} muted key={videoSrc}>
            <source src={videoSrc} type="video/mp4"></source>
          </video> */}
          <img src = {familyImg} alt="family" className="absolute z-10 w-7/12 bottom-0 hidden md:inline"/>
          <img  src={childImg} alt="child" className="z-20 w-full md:w-4/12 md:translate-y-10 md:-translate-x-4"/>
        </div>
      </div>
      <div
        id="cta"
        className="flex flex-col items-center translate-y-20 opacity-0"
      >
        <a href="#highlights" className="btn">
          {t("hero.button")}
        </a>
        
      </div>
    </section>
  );
};

export default Hero;
