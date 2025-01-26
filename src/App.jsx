// src/App.jsx
import { useState, useEffect } from 'react'; // <-- Wichtig: useEffect importieren!
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components - Navigation & Footer
import Navigation from './components/sections/Navigation/Navigation';
import Footer from './components/sections/Footer';

// Landing Page Sections
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import About from './components/sections/About';
import Support from './components/sections/Support';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import PackageComparison from './components/sections/PackageComparison';

// Pages
import ContactPage from './components/sections/Contact/ContactPage';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import AGB from './pages/AGB';

// Scroll to top component
function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

// Home page component
const HomePage = () => (
  <main>
    <Hero />
    <Stats />
    <About />
    <Support />
    <PackageComparison />
    <Testimonials />
    <FAQ />
    <Contact />
  </main>
);

export default function App() {
  return (
    <Router>
      <Navigation />
      <div className="min-h-screen bg-background-primary flex flex-col">
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/kontakt" element={<ContactPage />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/agb" element={<AGB />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}