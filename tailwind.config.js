/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 60% - Basis
        base: {
          primary: '#EEEDEA',    // Warmer Hintergrund
          secondary: '#FFFFFF',   // Karten/Komponenten
          tertiary: '#F1F0EC',   // Abgedunkelte Version
        },
        // 30% - Hauptfarben
        main: {
          primary: '#171614',    // Wärmer, perfekter Kontrast
          secondary: '#1F1E1C',  // Überschriften
          tertiary: '#333333',   // Längere Texte
        },
        // 10% - Akzentfarben
        accent: {
          primary: '#007AFF',    // Gedämpftes Blau
          secondary: '#FF7043',  // Weniger gesättigtes Orange
          tertiary: '#00B27A',   // Gedämpftes Grün
        },
        // Unterstützungsfarben
        support: {
          gray: '#7A7A7A',       // Neutral für Nebentexte
          lightGray: '#E5E4E1',  // Harmonische Trennlinien
          overlay: 'rgba(0, 0, 0, 0.05)', // Sanfte Hover-Effekte
        }
      },
      fontFamily: {
        'sf': ['SF Pro Display', 'Inter', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        // Überschriften
        'h1': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],     // 60px
        'h1-mobile': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }], // 48px
        'h2': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],        // 48px
        'h2-mobile': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }], // 36px
        'h3': ['2rem', { lineHeight: '1.3' }],                                  // 32px
        'h3-mobile': ['1.5rem', { lineHeight: '1.3' }],                        // 24px
        'h4': ['1.5rem', { lineHeight: '1.4' }],                               // 24px
        'h4-mobile': ['1.25rem', { lineHeight: '1.4' }],                      // 20px

        // Fließtext
        'lead': ['1.25rem', { lineHeight: '1.8' }],                           // 20px
        'lead-mobile': ['1.125rem', { lineHeight: '1.8' }],                   // 18px
        'base': ['1rem', { lineHeight: '1.6' }],                              // 16px
        'small': ['0.875rem', { lineHeight: '1.6' }],                         // 14px
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
}