import { createContext, useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Create the context
const DirectionContext = createContext();

// Create a provider component
export const DirectionProvider = ({ children }) => {
  const { t } = useTranslation();
  const [direction, setDirection] = useState(t("direction"));
  return (
    <DirectionContext.Provider value={{ 
      direction, 
      setDirection, 
    }}>
      {children}
    </DirectionContext.Provider>
  );
};

// Custom hook to use the direction context
export const useDirection = () => {
  const context = useContext(DirectionContext);
  if (!context) {
    throw new Error('useDirection must be used within a DirectionProvider');
  }
  return context;
};