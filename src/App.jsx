import "./App.css";
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useDirection } from './context/DirectionContext';
import Navbar from "./compoonents/Navbar";
import Hero from "./compoonents/Hero";
import Highlights from "./compoonents/Highlights";
import Features from "./compoonents/Features";
import Footer from "./compoonents/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import { DirectionProvider } from "./context/DirectionContext";


function App() {
  const { t, i18n } = useTranslation();
  const { direction, setDirection } = useDirection();

  useEffect(() => {
    // Update direction when language changes
    const currentDirection = t('direction');
    setDirection(currentDirection);
    
    // Set document direction
    document.documentElement.dir = currentDirection;
    document.documentElement.lang = i18n.language;
  }, [i18n.language, t, setDirection]);

  return (
    <ThemeProvider>
      <DirectionProvider>
        <main className={`bg-white dark:bg-black ${direction === 'rtl' ? 'rtl' : 'ltr'}`}>
          <Navbar />
          <Hero />
          <Highlights />
          <Features/>
          <Footer/>
        </main>
      </DirectionProvider>
    </ThemeProvider>
  );
}

export default App;
