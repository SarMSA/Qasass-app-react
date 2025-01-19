import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { watchImg, rightImg } from "../utils/index";
import VideoCarousel from "./VideoCarousel";
import { useTranslation } from "react-i18next";
import { useDirection } from "../context/DirectionContext";

const Highlights = () => {
  const { t } = useTranslation();
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);
  
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden common-padding dark:bg-dark-zinc bg-zinc-lightZ h-full"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            {t('highlights.title')}
          </h1>
          
        </div>
      </div>
      <VideoCarousel />
    </section>
  );
};

export default Highlights;
