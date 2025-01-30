import { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Analytics from '@/components/common/Analytics';

// Components - Navigation & Footer (wichtige UI-Elemente sofort laden)
import Navigation from '@/components/sections/Navigation/Navigation';
import Footer from '@/components/sections/Footer';
import CookieConsent from '@/components/common/CookieConsent';

// Lazy loaded sections
const Hero = lazy(() => import('@/components/sections/Hero'));
const Stats = lazy(() => import('@/components/sections/Stats'));
const About = lazy(() => import('@/components/sections/About'));
const Support = lazy(() => import('@/components/sections/Support'));
const Testimonials = lazy(() => import('@/components/sections/Testimonials'));
const FAQ = lazy(() => import('@/components/sections/FAQ'));
const Contact = lazy(() => import('@/components/sections/Contact'));
const PackageComparison = lazy(() => import('@/components/sections/PackageComparison'));

// Lazy loaded pages
const ContactPage = lazy(() => import('@/components/sections/Contact/ContactPage'));
const Impressum = lazy(() => import('@/pages/Impressum'));
const Datenschutz = lazy(() => import('@/pages/Datenschutz'));
const AGB = lazy(() => import('@/pages/AGB'));
const NotFound = lazy(() => import('@/pages/NotFound'));

// Loading component
const LoadingSpinner = () => (
  <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

// Scroll to top component (unverändert)
function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

// Home page component (mit Suspense für jede Sektion)
const HomePage = () => (
  <main>
    <Suspense fallback={<LoadingSpinner />}>
      <Hero />
    </Suspense>
    <Suspense fallback={<LoadingSpinner />}>
      <Stats />
    </Suspense>
    <Suspense fallback={<LoadingSpinner />}>
      <About />
    </Suspense>
    <Suspense fallback={<LoadingSpinner />}>
      <PackageComparison />
    </Suspense>
    <Suspense fallback={<LoadingSpinner />}>
      <Support />
    </Suspense>
    <Suspense fallback={<LoadingSpinner />}>
      <Testimonials />
    </Suspense>
    <Suspense fallback={<LoadingSpinner />}>
      <FAQ />
    </Suspense>
    <Suspense fallback={<LoadingSpinner />}>
      <Contact />
    </Suspense>
  </main>
);

export default function App() {
  const [isPageLoading, setIsPageLoading] = useState(false);

  useEffect(() => {
    // Preload wichtige Komponenten
    const preloadComponents = async () => {
      try {
        await Promise.all([
          import('@/components/sections/Hero'),
          import('@/components/sections/About'),
          import('@/components/sections/PackageComparison')
        ]);
      } catch (error) {
        console.error('Preloading failed:', error);
      }
    };

    preloadComponents();
  }, []);

  return (
    <Router>
       <Analytics />
      <Navigation />
      <div className="min-h-screen bg-background-primary flex flex-col">
        <ScrollToTop />
        {isPageLoading && <LoadingSpinner />}
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/kontakt" element={
              <Suspense fallback={<LoadingSpinner />}>
                <ContactPage />
              </Suspense>
            } />
            <Route path="/impressum" element={
              <Suspense fallback={<LoadingSpinner />}>
                <Impressum />
              </Suspense>
            } />
            <Route path="/datenschutz" element={
              <Suspense fallback={<LoadingSpinner />}>
                <Datenschutz />
              </Suspense>
            } />
            <Route path="/agb" element={
              <Suspense fallback={<LoadingSpinner />}>
                <AGB />
              </Suspense>
            } />
            <Route path="*" element={
              <Suspense fallback={<LoadingSpinner />}>
                <NotFound />
              </Suspense>
            } />
          </Routes>
        </AnimatePresence>
        
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}