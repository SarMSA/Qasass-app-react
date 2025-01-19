/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          pink: "#FFDDE6",
          blue: "#D9F1FF",
          white: '#F9FAFB',
          silver: '#D1D5DB',
          zinc: {
            darkZ: '#4B5563',
            midZ: '#6B7280',
            lightZ: '#E5E7EB',
            dark: {
              DEFAULT: '#1F2937',
              100: '#111827',
              200: '#030712'
            }
          },
          dark: {
            blue: "#2997FF",
            gray: {
              DEFAULT: "#86868b",
              100: "#94928d",
              200: "#afafaf",
              300: "#42424570",
            },
            zinc: "#101010",
          },
        },
      },
      variants: {
        extend: {
          textAlign: ['rtl'],
          flexDirection: ['rtl']
        }
      }
    },
    plugins: [require('tailwindcss-rtl')],

  };
  