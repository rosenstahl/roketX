import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import TrustedBySection from './components/TrustedBySection';
import PackageComparison from './components/PackageComparison';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import SupportSection from './components/SupportSection';
import TestimonialSlider from './components/TestimonialSlider';
import FAQSection from './components/FAQSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import AGB from './pages/AGB';
import StackedCards from './components/StackedCards';
import Growth from './components/Growth';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background-primary flex flex-col">
        <Navigation />
        <Routes>
          <Route path="/" element={
            <main>
              <HeroSection />
              <TrustedBySection/>
              <PackageComparison/>
              <StatsSection/>
              <Growth/>
              <AboutSection/>
              <StackedCards/>
              <SupportSection/>
              <TestimonialSlider/>
              <FAQSection/>
              <ContactForm/>
            </main>
          } />
          <Route path="/kontakt" element={
            <main className="pt-20 px-4">
              <h1 className="text-4xl font-bold text-center">Kontakt</h1>
            </main>
          } />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGB />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;